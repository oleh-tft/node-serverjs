export default class ClientController {
    
    doGet(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        response.end("ClientController")
    }

    doPost(request, response, id) {
        let body = ''
        request.on('data', function(chunk) { body += chunk })
        request.on('end', function() {
            console.log('ClientController::doPost body: ' + body)
            console.log(request.headers['content-type'])
            if (validContentType(request.headers['content-type'])) {
                    let data = JSON.parse(body)
                    if (typeof data == 'object')
                        data = JSON.stringify(data)
                    response.writeHead(200, {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    })
                    response.end(JSON.stringify({
                        "controller": "ClientController",
                        "method": "POST",
                        "semantic": "Create",
                        "body": data
                    }))
            } else {
                response.writeHead(415)
                response.end()
            }
        })
    }

    doPut(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        response.end(JSON.stringify(
            {
                "controller": "ClientController",
                "method": "PUT",
                "semantic": "Update"
            }))
    }

    doPatch(request, response, id) {
        response.writeHead(200)
        response.end(JSON.stringify(
            {
                "controller": "ClientController",
                "method": "PATCH",
                "semantic": "Update"
            }))
    }

    doDelete(request, response, id) {
        response.writeHead(200)
        response.end(JSON.stringify(
            {
                "controller": "ClientController",
                "method": "DELETE",
                "semantic": "Delete"
            }))
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