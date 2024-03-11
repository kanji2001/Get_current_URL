function getCurrentURL() {
    var currentURL = window.location.href;

    document.getElementById('result').innerText = 'Current URL: ' + currentURL;
}