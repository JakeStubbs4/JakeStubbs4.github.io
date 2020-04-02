$('.get-top-tracks').click(function(){
    const urlString = window.location.toString();
    console.log("URL:");
    console.log(urlString);
    auth_token = (urlString.split("=")[1]).split("&")[0]
    console.log("AUTHTOKEN:");
    console.log(auth_token);
    var authHeader = "Bearer " + auth_token;
    $.ajax({
        url: 'https://api.spotify.com/v1/me/top/tracks',
        headers: { Authorization: authHeader },
        type: "GET",
        success: function(response) {
            console.log("SPOTIFY RESPONSE:");
            console.log(response);
            updateMostPlayed(response);
        }
    })
});

function updateMostPlayed(response){
    $('.login-field').attr("hidden", true);
    $('.display-field').attr("hidden", false);
    (response.items).forEach(item => {
        $('.tracks-list').append(
        "<li style='padding-bottom: 10px;'>"
        +   "<div>" + item.artists[0].name + "</div>"
        +   "<div>" + item.name + "</div>"
        + "</li>"
        )
    });
};

function generateRecommendations(){
    
}