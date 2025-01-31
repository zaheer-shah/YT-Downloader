
document.getElementById('download-btn').addEventListener('click', () => {
    const videoUrl = document.getElementById('video-url').value;
    if (videoUrl) {
      alert(`Downloading video from Youtube: ${videoUrl}`);
     
      document.getElementById('thumbnail-img').src = 'https://via.placeholder.com/300x200';
      document.getElementById('video-title').innerText = 'Sample Video Title';
      document.getElementById('video-duration').innerText = 'Duration: 5:30';
    } else {
      alert('Please enter a valid YouTube video URL.');
    }
  });