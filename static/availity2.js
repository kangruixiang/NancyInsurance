/* eslint-disable no-console */
// eslint-disable-next-line no-undef

// eslint-disable-next-line no-unused-vars
// let { website, dates, diagnosisCode, cpt } = BOOKMARK;
// let filter99203 = cpt.filter((cpt) => cpt.label == 99203); // filters cpt code to only have 99203 for later use
// let cptChecked = cpt.filter((item) => item.checked == true); // filters checked cpt only
// let line = 0;

alert("test3");

let iframe = document.getElementById("newBodyFrame");
console.log(iframe);

const from = iframe.contentWindow.document.querySelector(
  'input[name="claimInformation.serviceLines.0.fromDate"]'
);

const input = iframe.contentWindow.document.querySelector(
  'input[name="claimInformation.serviceLines.0.toDate"]'
);

const cost = iframe.contentWindow.document.querySelector(
  'input[name="claimInformation.serviceLines.0.amount"]'
);

// to.value = "11/09/2023";
// cost.value = 50;

// from.addEventListener("click", function (event) {
//   event.preventDefault();
//   from.value = "11/09/2023";
// });


// input.select(); // you can also use input.focus()
input.value = "11/09/2023";

const text = "11/09/2023";
const l = text.length;
let current = 0;
const time = 1000;

const write_text = function () {
  input.value += text[current];
  if (current < l - 1) {
    current++;
    setTimeout(function () {
      write_text();
    }, time);
  } else {
    input.setAttribute("value", input.value);
  }
};
setTimeout(function () {
  write_text();
}, time);



key: 'a02a2addb0a8ed07c1d09770e89a92b2';
secret: '5ef2355aed3438390c6559ea736f2bbd'


curl -i -X "POST" "https://api.availity.com/availity/v1/token" -d "grant_type=client_credentials&client_id=a02a2addb0a8ed07c1d09770e89a92b2&client_secret=5ef2355aed3438390c6559ea736f2bbd&scope=hipaa"

curl -i -H "Authorization: Bearer AAIgYTAyYTJhZGRiMGE4ZWQwN2MxZDA5NzcwZTg5YTkyYjLiHjrIE3RAOldu91bGYxzIObQyY_zi1_yZlus7qed0Lw7zS4-IwkrNfKG9gUBeF-nEXe_5TiqI_M9SFNW2o0XcoAa6FKsqHgmefYYVxuLVA0H_fp2iS-G0HsWllKz5CWc" -X GET "https://api.availity.com/availity/v1/coverages" 