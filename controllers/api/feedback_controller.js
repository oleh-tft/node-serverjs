export default class FeedbackController {
    
    doGet(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        response.end("FeedbackController")
    }

    doPost(request, response, id) {
        response.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
        response.end(JSON.stringify(
            {
                "controller": "FeedbackController",
                "method": "POST",
                "semantic": "Create"
            }))
    }

    doPut(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        response.end(JSON.stringify(
            {
                "controller": "FeedbackController",
                "method": "PUT",
                "semantic": "Update"
            }))
    }

    doPatch(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        response.end(JSON.stringify(
            {
                "controller": "FeedbackController",
                "method": "PATCH",
                "semantic": "Update"
            }))
    }

    doDelete(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        response.end(JSON.stringify(
            {
                "controller": "FeedbackController",
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