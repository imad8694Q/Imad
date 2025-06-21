document.getElementById("comment-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("comment-input");
  const comment = input.value.trim();
  if (comment) {
    const commentDiv = document.createElement("div");
    commentDiv.textContent = comment;
    document.getElementById("comments-list").appendChild(commentDiv);
    input.value = "";
  }
});