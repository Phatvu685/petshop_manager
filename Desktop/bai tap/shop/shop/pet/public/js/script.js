/* Lấy phần tử form tìm kiếm */
searchForm = document.querySelector('.search-form');
/* Khi nhấn nút tìm kiếm, bật/tắt class 'active' để hiện/ẩn form */
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
};

/* Lấy phần tử form đăng nhập */
let loginForm = document.querySelector('.login-form-container');
/* Khi nhấn nút đăng nhập, bật/tắt class 'active' để hiện/ẩn form đăng nhập */
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
};
/* Khi nhấn nút đóng form đăng nhập, bỏ class 'active' để ẩn form */
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
};

/* Đã loại bỏ xử lý click giỏ hàng trong script.js để tránh xung đột với React */
// const cartForm = document.querySelector('.cart');
// const cartBtn = document.querySelector('#cart-btn');

// cartBtn.onclick = () => {
//     if (cartForm.style.display === 'block') {
//         cartForm.style.display = 'none';
//     } else {
//         cartForm.style.display = 'block';
//     }
// };
/* Xử lý sự kiện cuộn trang */
window.onscroll = () => {
    /* Ẩn form tìm kiếm khi cuộn */
    searchForm.classList.remove('active');
    /* Thêm hoặc bỏ class 'active' cho header khi cuộn trang */
    if (window.scrollY > 0) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
};
/* Xử lý sự kiện khi trang được tải xong */
window.onload = () => {
    /* Thêm hoặc bỏ class 'active' cho header dựa trên vị trí cuộn */
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

    /* Gọi hàm fadeOut để xử lý loader */
    fadeOut();
};
/* Hàm hiển thị loader */
function loader() {
    document.querySelector('.loader-container').classList.add('active');
}

/* Hàm ẩn loader sau 2 giây */
function fadeOut() {
    setTimeout(loader, 2000);
}
/* Khởi tạo Swiper cho slider sách */
var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    }
});
/* Khởi tạo Swiper cho slider sản phẩm nổi bật */
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigator: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
/* Khởi tạo Swiper cho slider đánh giá */
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
/* Khởi tạo Swiper cho slider blog */
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

/* Lấy phần tử form tìm kiếm */
searchForm = document.querySelector('.search-form');
/* Khi nhấn nút tìm kiếm, bật/tắt class 'active' để hiện/ẩn form */
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
};

/* Lấy phần tử form đăng nhập */
let loginForm = document.querySelector('.login-form-container');
/* Khi nhấn nút đăng nhập, bật/tắt class 'active' để hiện/ẩn form đăng nhập */
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
};
/* Khi nhấn nút đóng form đăng nhập, bỏ class 'active' để ẩn form */
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
};
/* Xử lý sự kiện cuộn trang */
window.onscroll = () => {
    /* Ẩn form tìm kiếm khi cuộn */
    searchForm.classList.remove('active');
    /* Thêm hoặc bỏ class 'active' cho header khi cuộn trang */
    if (window.scrollY > 0) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
};
/* Xử lý sự kiện khi trang được tải xong */
window.onload = () => {
    /* Thêm hoặc bỏ class 'active' cho header dựa trên vị trí cuộn */
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

    /* Gọi hàm fadeOut để xử lý loader */
    fadeOut();
};
/* Hàm hiển thị loader */
function loader() {
    document.querySelector('.loader-container').classList.add('active');
}

/* Hàm ẩn loader sau 2 giây */
function fadeOut() {
    setTimeout(loader, 2000);
}
/* Khởi tạo Swiper cho slider sách */
var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    }
});
/* Khởi tạo Swiper cho slider sản phẩm nổi bật */
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigator: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
/* Khởi tạo Swiper cho slider đánh giá */
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
/* Khởi tạo Swiper cho slider blog */
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
