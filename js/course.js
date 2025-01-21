// // function showMore(element) {
// //   var article = element.closest("article");
// //   article.classList.toggle("expanded");
// //   if (article.classList.contains("expanded")) {
// //     element.textContent = "See Less";
// //   } else {
// //     element.textContent = "See More";
// //   }
// // }


// function showMore(element) {
//   // Close all open boxes except the one being clicked
//   var allArticles = document.querySelectorAll('#touch_gallery .grid_4 article');
//   allArticles.forEach(function(article) {
//     if (article !== element.closest("article")) {
//       article.classList.remove('expanded');
//       article.querySelector('.see-more').textContent = "See More";
//     }
//   });

//   // Toggle the clicked box
//   var article = element.closest("article");
//   article.classList.toggle("expanded");
//   if (article.classList.contains("expanded")) {
//     element.textContent = "See Less";
//   } else {
//     element.textContent = "See More";
//   }
// }


function showMore(element) {
  // Close all open boxes except the one being clicked
  var allArticles = document.querySelectorAll('#touch_gallery .grid_4 article');
  allArticles.forEach(function(article) {
    if (article !== element.closest("article")) {
      article.classList.remove('expanded');
      article.querySelector('.see-more').textContent = "See More";
    }
  });

  // Toggle the clicked box
  var article = element.closest("article");
  article.classList.toggle("expanded");
  if (article.classList.contains("expanded")) {
    element.textContent = "See Less";
    article.querySelector('.enquiry-button').style.display = "block";
  } else {
    element.textContent = "See More";
  }
}

// Close all boxes when clicking outside of them
document.addEventListener('click', function(event) {
  var isClickInside = event.target.closest('article') !== null;
  if (!isClickInside) {
    var allArticles = document.querySelectorAll('#touch_gallery .grid_4 article');
    allArticles.forEach(function(article) {
      article.classList.remove('expanded');
      article.querySelector('.see-more').textContent = "See More";
    });
  }
});

function setCourse(courseId) {
  localStorage.setItem('selectedCourse', courseId);
};
 