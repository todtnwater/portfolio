document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.querySelector(".carousel .logos");
  const images = [
      "../A1/images/pizza.jpg",
      "../A1/images/pasta.jpg",
      "../A1/images/salad.jpg",
      "../A1/images/dessert.jpg",
      "../A1/images/fried_chicken.jpg",
      "../A1/images/noodles.jpg",
      "../A1/images/sandwich.jpg",
      "../A1/images/ramen.jpg",
      "../A1/images/dumplings.jpg",
      "../A1/images/tacos.jpg"
  ];

  const totalImagesNeeded = images.length;

  // 이미지 컨테이너 초기화
  imageContainer.innerHTML = "";

  // 필요한 이미지 개수만큼 추가
  for (let i = 0; i < totalImagesNeeded * 2; i++) {
      const img = document.createElement("img");
      img.src = images[i % totalImagesNeeded]; // 순환하여 이미지 추가
      img.alt = `음식 이미지 ${i + 1}`;
      img.style.height = "100px"; // 고정 높이
      img.onerror = () => {
          img.src = "../A1/images/placeholder.jpg"; // 대체 이미지 경로
      };
      imageContainer.appendChild(img);
  }

  // 애니메이션 멈추기 / 다시 시작하기
  imageContainer.addEventListener("mouseover", () => {
      imageContainer.style.animationPlayState = "paused"; // 애니메이션 멈춤
  });

  imageContainer.addEventListener("mouseout", () => {
      imageContainer.style.animationPlayState = "running"; // 애니메이션 다시 실행
  });
});