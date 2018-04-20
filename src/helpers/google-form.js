import { gform } from './http';

const qs = require('qs');

export function validEmail(email) { // see:
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

export function validateHuman(honeypot) {
  if (honeypot) return true;
  return false;
}

export function getFormData(elemId) {
  const form = document.getElementById(elemId);
  const elements = form.elements;
  const fields = Object.keys(elements).map((k) => {
    if (elements[k].name !== undefined) {
      return elements[k].name;
    } else if (elements[k].length > 0) {
      return elements[k].item(0).name;
    }
    return null;
  })
    .filter((item, pos, self) => {
      return self.indexOf(item) === pos && item;
    });
  const data = {};
  fields.forEach((k) => {
    data[k] = elements[k].value;
    let str = '';

    if (elements[k].type === 'checkbox') {
      str = str + elements[k].checked + ', ';
      data[k] = str.slice(0, -2);
                                  // from the  string to make the output
                                  // prettier in the spreadsheet
    } else if (elements[k].length) {
      for (let i = 0; i < elements[k].length; i += 1) {
        if (elements[k].item(i).checked) {
          str = str + elements[k].item(i).value + ', ';
          data[k] = str.slice(0, -2);
        }
      }
    }
  });

  // add form-specific values into the data
  data.formDataNameOrder = JSON.stringify(fields);
  data.formGoogleSheetName = form.dataset.sheet || 'responses';
  data.formGoogleSendEmail = form.dataset.email || '';

  return data;
}

export function handleFormSubmit(url, data) {
  event.preventDefault();

  // if (!validEmail(data.email)) {
  //   document.getElementById('email-invalid').style.display = 'block';
  //   return false;
  // }

  return gform.post(url, qs.stringify(data));
}
