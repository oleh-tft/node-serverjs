export default class FeedbackController {

    constructor() {
        this.restResponse = {
            status: {
                code: 200,
                phrase: 'Ok',
                isSuccess: true
            },
            meta: {
                service: "Feedback API",
                method: "",
                serverTime: new Date().getTime(),
                cache: 0,
                dataType: ""
            },
            data: null
        }
    }
    
    doGet(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        })

        this.restResponse.meta.method = request.method
        this.restResponse.meta.slug = id
        this.restResponse.meta.cache = 86400
        this.restResponse.meta.dataType = "string"
        this.restResponse.data = "FeedbackController"

        response.end(JSON.stringify(this.restResponse))
    }

    doPost(request, response, id) {
        let body = ''
        request.on('data', function(chunk) { body += chunk })
        request.on('end', async () => {
            console.log('ClientController::doPost body: ' + body)
            console.log(request.headers['content-type'])
            if (validContentType(request.headers['content-type'])) {
                    let data = JSON.parse(body)
                    response.writeHead(200, {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    })
                    this.restResponse.meta.method = request.method
                    this.restResponse.meta.slug = id
                    this.restResponse.meta.cache = 0
                    this.restResponse.meta.dataType = "string"

                    try {
                        this.restResponse.data = "FeedbackController"
                    } catch(err) {
                        this.restResponse.data = err
                    }
                    response.end(JSON.stringify(this.restResponse))
            } else {
                response.writeHead(415) // Unsupported Media Type
                response.end()
            }
        })
    }

    doPut(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        })
        this.restResponse.meta.method = request.method
        this.restResponse.meta.slug = id
        this.restResponse.meta.cache = 86400
        this.restResponse.meta.dataType = "string"
        this.restResponse.data = "PUT FeedbackController"

        response.end(JSON.stringify(this.restResponse))
    }

    doPatch(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        })
        this.restResponse.meta.method = request.method
        this.restResponse.meta.slug = id
        this.restResponse.meta.cache = 86400
        this.restResponse.meta.dataType = "string"
        this.restResponse.data = "PATCH FeedbackController"

        response.end(JSON.stringify(this.restResponse))
    }

    doDelete(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        })
        this.restResponse.meta.method = request.method
        this.restResponse.meta.slug = id
        this.restResponse.meta.cache = 86400
        this.restResponse.meta.dataType = "string"
        this.restResponse.data = "DELETE FeedbackController"

        response.end(JSON.stringify(this.restResponse))
    }

    doOptions(request, response) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers': '*'
        })
        response.end()
    }

}

function validContentType(str) {
    if (typeof str != 'string') return false

    const jsonType = 'application/json'
    if (str.startsWith(jsonType)) {
        if (str === jsonType || str[jsonType.length] == ';') {
            return true
        }
    }

    return false
}