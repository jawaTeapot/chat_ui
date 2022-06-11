function addAutoResize() {
  const textArea = document.querySelector('[data-autoresize]');
  const wrap = document.querySelector('.resizeable');
  const msgWrap = document.querySelector('.center-column__messages');
  const offset = textArea.offsetHeight - textArea.clientHeight;
  textArea.addEventListener('input', function (event) {
    event.target.style.height = 'auto';
    let height = event.target.scrollHeight + offset;
    if (height > 270) height = 270;
    event.target.style.height = height + 'px';

    wrap.style.height = 'auto';
    wrap.style.height = height + 21 + 'px';

    msgWrap.style.height = 'auto';
    msgWrap.style.height = `calc(100% - ${height + 21 + 59}px)`;
  });
}

addAutoResize();

$('#open-left-bar').on('click', function(e) {
  $('.left-column').addClass('open');
});

$('#close-left-bar').on('click', function(e) {
  $('.left-column').removeClass('open');
});

$('#open-right-bar').on('click', function(e) {
  $('.right-column').addClass('open');
});

$('#close-right-bar').on('click', function(e) {
  $('.right-column').removeClass('open');
});