import { elements } from "./scripts/helpers.js";
import { Github } from "./scripts/api.js";
import  {UI} from "./scripts/uı.js";
const github=new Github();
const uı=new UI ();

github.fetchUserData();
const getInput = (e) => {
    e.preventDefault();
    const value = elements.searchInput.value;
    if (value == "") {
      uı.showAlert("Form alanını doldurunuz.", "alert alert-warning");
      return;
    }
    if (value) {
      github.fetchUserData(value).then((res) => {
          if (res.message === "Not Found") {
            uı.showAlert("Aradığınız kullanıcı bulunamadı.", "alert alert-danger");
          } else {
            uı.showAlert("Kullanıcı bulundu.", "alert alert-success");
            uı.renderProfile(res.data);
            console.log(res);
            uı.renderProjects(res.repos);
          }
        })
        .catch((err) => console.log(err));
      return;
    }
  };
  
  elements.searchBtn.addEventListener("click", getInput);