import * as fs from "node:fs/promises"

export default class HomeController {

    async index(request, response, id) {
        let parts = request.url.split("?")

        const pageData = {
            method: request.method,
            httpVersion: request.httpVersion,
            url: request.url,
            query: null,
            controller: "home",
            action: "index",
            slug: null
        }

        pageData.groupsHtml = await this.makeGroupsHtml()

        if (parts.length == 2) {

            pageData.query = parts[1]
            let tempString = '<pre>{\n'

            let queryEntry = parts[1].split('&')
            for (let entryIndex in queryEntry) {
                let entrySplit = queryEntry[entryIndex].split('=')
                if (entrySplit.length != 2) {
                    throw `Format Error: invalid query entry`
                }
                tempString += `    ${entrySplit[0]}: ${entrySplit[1]}${entryIndex == queryEntry.length - 1 ? '' : ','}\n`
            }
            tempString += '}</pre>'
            pageData.query = tempString
        }
        pageData.path = parts[0]


        parts = parts[0].split('/')
        let path = parts.slice(1)
        if (path.length > 0) {
            pageData.controller = path[0] == '' ? 'home' : path[0]
        }
        path = path.slice(1)
        if (path.length > 0) {
            pageData.action = path[0]
        }
        path = path.slice(1)
        if (path.length > 0) {
            let slug = ''
            for (let entry of path) {
                slug += `/${entry}`
            }
            pageData.slug = slug
        }

        const file = await fs.open("home.html", "r")
        let html = (await file.readFile()).toString()
        file.close()
        for (let k in pageData) {
            html = html.replaceAll(`{{${k}}}`, pageData[k])
        }

        await this.layout(response, html)
    }

    async privacy(request, response, id) {
        await this.layout(response, "<h1>Політика конфіденційності 🤫</h1>")
    }

    async makeGroupsHtml() {
        const [data] = await this.dbPool.query('SELECT * FROM \`groups\`')
        let wasChild
        do {
            wasChild = false
            for (let i = 0; i < data.length; i++) {
                let grp = data[i]
                if (grp["parent_id"] != null) {
                    wasChild = true
                    let parent = this.findParent(data, grp["parent_id"])
                    if (parent == null) { }
                    if (typeof parent.sub == 'undefined') {
                        parent.sub = []
                    }
                    parent.sub.push(grp)
                    data.splice(i, 1)
                }
            }
        } while (wasChild)

        return this.grpToHtml(data)
    }

    grpToHtml(grps) {
        let html = "<ul>"
        for (let grp of grps) {
            html += `<li>${grp.name}`
            if (typeof grp.sub != 'undefined' && grp.sub.length > 0) {
                html += this.grpToHtml(grp.sub)
            }
            html += '</li>'
        }
        html += '</ul>'
        return html
    }

    findParent(arr, parent_id) {
        for (let elem of arr) {
            if (elem.id == parent_id) return elem
            if (typeof elem.sub != 'undefined') {
                let p = this.findParent(elem.sub, parent_id)
                if (p != null) return p
            }
        }
        return null
    }

    async layout(response, main) {
        const file = await fs.open("layout.html", "r")
        let html = (await file.readFile()).toString()
        file.close()
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        response.end(html.replace('{{main}}', main))
    }

}