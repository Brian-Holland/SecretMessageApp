const { hash } = window.location;

const message = atob(hash.replace("#", ""));

if (message) {
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#message-show").classList.remove("hide");
    document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");

    //grab messages from user input
    const input = document.querySelector("#message-input");
    //encrpyt message
    const encrypted = btoa(input.value);
    //select link
    const linkInput = document.querySelector("#link-input");
    //set sendable link to url with encrypted message
    linkInput.value = `${window.location}#${encrypted}`;
    //auto select for user
    linkInput.select();
});
