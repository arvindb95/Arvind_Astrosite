document.addEventListener('astro:page-load', () => {
  document.querySelector('.threelines').addEventListener('click', () => {
    document.querySelector('.side-bar').classList.toggle('expanded');
  });
});  