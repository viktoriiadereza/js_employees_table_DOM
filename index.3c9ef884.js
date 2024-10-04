document.addEventListener("DOMContentLoaded",function(){var e=function(e){var t=document.querySelector("tr.active");t&&t.classList.remove("active"),e.classList.add("active")},t=function(e,t){var n=document.createElement("div");n.textContent=e,n.className="notification ".concat(t),n.setAttribute("data-qa","notification"),n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.textAlign="center",document.body.appendChild(n),setTimeout(function(){n.remove()},3e3)},n=function(e){var t=e.textContent.trim(),n=document.createElement("input");n.type="text",n.value=t,n.classList.add("cell-input"),e.textContent="",e.appendChild(n),n.focus(),n.addEventListener("blur",function(){a(e),u=null}),n.addEventListener("keydown",function(t){"Enter"===t.key&&(a(e),u=null)})},a=function(e){var t=e.querySelector("input");if(t){var n=t.value.trim(),a=t.defaultValue.trim();e.textContent=""===n?a:n,t.remove()}},o=document.querySelector("tbody"),r=document.querySelectorAll("th"),l={},i=null;r.forEach(function(e,t){l[t]=!0,e.addEventListener("click",function(){var e=Array.from(o.querySelectorAll("tr")),n=3===t||4===t;i!==t&&(l[t]=!0);var a=e.sort(function(e,a){var o,r=e.cells[t].innerText,i=a.cells[t].innerText;if(n){var c=parseFloat(r.replace(/[^0-9.-]+/g,"")),u=parseFloat(i.replace(/[^0-9.-]+/g,""));o=l[t]?c-u:u-c}else o=l[t]?r.localeCompare(i):i.localeCompare(r);return o});i=t,l[t]=!l[t],o.innerHTML="",a.forEach(function(e){return o.appendChild(e)})})}),document.querySelectorAll("tbody tr").forEach(function(t){t.onclick=function(){e(this)}}),document.body.insertAdjacentHTML("beforeend",'\n    <form class="new-employee-form" novalidate>\n      <label>Name:\n        <input name="emp-name" type="text" data-qa="name" required></label><br>\n      <label>Position:\n        <input name="position" type="text" data-qa="position" required></label><br>\n      <label>Office:\n        <select name="office" data-qa="office" required>\n          <option value="">Select office</option>\n          <option value="Tokyo">Tokyo</option>\n          <option value="Singapore">Singapore</option>\n          <option value="London">London</option>\n          <option value="New York">New York</option>\n          <option value="Edinburgh">Edinburgh</option>\n          <option value="San Francisco">San Francisco</option>\n        </select>\n      </label><br>\n      <label>Age:\n        <input name="age" type="number" data-qa="age" required></label><br>\n      <label>Salary:\n        <input name="salary" type="number" data-qa="salary" required></label><br>\n      <button type="submit">Save to table</button>\n    </form>\n  ');var c=document.querySelector(".new-employee-form");c.addEventListener("submit",function(e){e.preventDefault();var n=c.querySelector('[data-qa="name"]').value.trim(),a=c.querySelector('[data-qa="position"]').value.trim(),r=c.querySelector('[data-qa="office"]').value,l=c.querySelector('[data-qa="age"]').value,i=c.querySelector('[data-qa="salary"]').value;if(!n||!a||!r||!l||!i){alert("All fields are required!");return}if(n.length<4){t("Name must contain at least 4 characters.","error");return}if(l<18||l>90){t("Age must be between 18 and 90.","error");return}if(!i||i<=0){t("Salary must be a positive number.","error");return}i="$".concat(parseFloat(i).toLocaleString("en-US"));var u="\n      <tr>\n        <td>".concat(n,"</td>\n        <td>").concat(a,"</td>\n        <td>").concat(r,"</td>\n        <td>").concat(l,"</td>\n        <td>").concat(i,"</td>\n      </tr>\n    ");o.insertAdjacentHTML("beforeend",u),c.reset(),t("Employee added successfully!","success")});var u=null;document.querySelector("tbody").addEventListener("dblclick",function(e){var t=e.target;"TD"===t.tagName&&t!==u&&(u&&a(u),u=t,n(t))})});
//# sourceMappingURL=index.3c9ef884.js.map
