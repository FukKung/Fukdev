window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 4000); // 4000 milliseconds = 4 วินาที
});


const button = document.querySelector('.button');

button.addEventListener('click', () => {
  // เพิ่มโค้ดสำหรับการทำงานเมื่อคลิกปุ่มที่นี่
});

