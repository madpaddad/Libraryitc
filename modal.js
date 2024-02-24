const btnRule = document.getElementById('btnRule');
const rule = document.getElementById('rule');
const close = document.getElementById('closerule');
const blurinfo = document.querySelector('.getinfo');
btnRule.addEventListener('click', () => {
    blurinfo.style.filter = 'blur(4px)';
    rule.style.display = 'block';
});

close.addEventListener('click', () => {
    rule.style.display = 'none';
    blurinfo.style.filter = 'none';
});