$('.get-top-tracks').click(function(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const accessToken = params.access_token;
    var authHeader = "Bearer " + accessToken;
    $.ajax({
        url: 'https://api.spotify.com/v1/me/top/tracks',
        headers: { Authorization: authHeader },
        type: "GET",
        success: function(response) {
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
