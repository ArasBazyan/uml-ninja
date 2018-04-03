var mapp = [];

function getRepoDetail(repoID) {
    $.ajax({
        url: 'http://localhost:3000/dash/' + repoID,
        type: 'GET',
        dataType: 'html'
    }).done(function(data) {
        console.log(repoID);
        if (data === 'null'|| data === 'undefined') {
            console.log("Undefined!");
        }
        mapp = JSON.parse(data);
        console.log(mapp);
    }).fail(function() {
        console.log("Something went wrong!");
    });
}


