document.addEventListener('DOMContentLoaded', function() {
    const bottomBtns = document.querySelectorAll('.bottom-btn');
    const pages = document.querySelectorAll('.page');
    const navBtns = document.querySelectorAll('.nav-btn');

    function showPage(pageName) {
        pages.forEach(p => p.classList.remove('active'));
        bottomBtns.forEach(b => b.classList.remove('active'));
        navBtns.forEach(b => b.classList.remove('active'));

        const targetPage = document.getElementById('page-' + pageName);
        if (targetPage) targetPage.classList.add('active');

        const targetBottom = document.querySelector('.bottom-btn[data-page="' + pageName + '"]');
        if (targetBottom) targetBottom.classList.add('active');

        const targetNav = document.getElementById('btn-' + pageName);
        if (targetNav) targetNav.classList.add('active');
    }

    bottomBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            showPage(this.getAttribute('data-page'));
        });
    });

    document.getElementById('btn-home').addEventListener('click', function() { showPage('home'); });
    document.getElementById('btn-trending').addEventListener('click', function() { showPage('trending'); });
    document.getElementById('btn-upload').addEventListener('click', function() { showPage('upload'); });

    var uploadArea = document.getElementById('uploadArea');
    var fileInput = document.getElementById('fileInput');

    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', function() { fileInput.click(); });

        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadArea.style.borderColor = '#1a73e8';
            uploadArea.style.background = 'rgba(26,115,232,0.06)';
        });

        uploadArea.addEventListener('dragleave', function() {
            uploadArea.style.borderColor = '';
            uploadArea.style.background = '';
        });

        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadArea.style.borderColor = '';
            uploadArea.style.background = '';
            var files = e.dataTransfer.files;
            if (files.length > 0) {
                showUploadPreview(files[0]);
            }
        });

        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                showUploadPreview(this.files[0]);
            }
        });
    }

    function showUploadPreview(file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = uploadArea.querySelector('img');
            if (img) {
                img.src = e.target.result;
                img.style.opacity = '1';
                img.style.width = '120px';
                img.style.height = '120px';
            }
        };
        reader.readAsDataURL(file);
    }

    var searchBtn = document.getElementById('searchBtn');
    var searchInput = document.getElementById('searchInput');

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            var q = searchInput.value.trim();
            if (q) {
                alert('Searching for: ' + q);
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                var q = this.value.trim();
                if (q) {
                    alert('Searching for: ' + q);
                }
            }
        });
    }

    var shareBtns = document.querySelectorAll('.share-btn');
    shareBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: 'MemeGram',
                    text: 'Check out this meme!',
                    url: window.location.href
                });
            } else {
                var dummy = document.createElement('input');
                document.body.appendChild(dummy);
                dummy.value = window.location.href;
                dummy.select();
                document.execCommand('copy');
                document.body.removeChild(dummy);
                alert('Link copied!');
            }
        });
    });
});
