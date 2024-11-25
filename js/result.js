document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".search-icon");

  // 클릭 시 돋보기 확대/축소
  searchIcon.addEventListener("click", () => {
    searchIcon.classList.add("clicked"); // 확대 클래스 추가

    setTimeout(() => {
      searchIcon.classList.remove("clicked"); // 일정 시간 후 원래 크기로 복귀
    }, 300); // 300ms 후 복귀
  });
});
