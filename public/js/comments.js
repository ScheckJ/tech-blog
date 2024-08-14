const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment_text"]').value.trim();
    const post_id = window.location.toString().split('/').pop();
  
    if (comment_text) {
      const response = await fetch(`/api/posts/${post_id}/comment`, {
        method: 'POST',
        body: JSON.stringify({
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add comment.');
      }
    }
  };
  
  document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
  