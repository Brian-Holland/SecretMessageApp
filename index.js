document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

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
