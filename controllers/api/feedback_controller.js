export default class FeedbackController {
    
    doGet(request, response, id) {
        response.writeHead(200)
        response.end("FeedbackController")
    }

    doPost(request, response, id) {
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        response.end(JSON.stringify(
            {
                "controller": "FeedbackController",
                "method": "POST",
                "semantic": "Create"
            }))
    }

    doPut(request, response, id) {
        response.writeHead(200)
        response.end(JSON.stringify(
            {
                "controller": "FeedbackController",
                "method": "PUT",
                "semantic": "Update"
            }))
    }

    doPatch(request, response, id) {
        response.writeHead(200)
        response.end(JSON.stringify(
            {
                "controller": "FeedbackController",
                "method": "PATCH",
                "semantic": "Update"
            }))
    }

    doDelete(request, response, id) {
        response.writeHead(200)
        response.end(JSON.stringify(
            {
                "controller": "FeedbackController",
                "method": "DELETE",
                "semantic": "Delete"
            }))
    }

}