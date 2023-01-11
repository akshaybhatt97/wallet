export default function setTexts(pathname, editTransaction, formData) {
  console.log(pathname);
  let title, buttonText;
  let updateFormData = formData;

  if (pathname === "edit") {
    updateFormData = editTransaction;
    if (editTransaction.type === "entry") {
      title = "Edit deposit";
      buttonText = "update deposit";
    } else {
      title = "Edit withdrawal";
      buttonText = "update withdrawal";
    }
  } else {
    if (pathname === "entry") {
      debugger;
      title = "New deposit";
      buttonText = "Save deposit";
    } else {
      title = "New withdrawal";
      buttonText = "Save withdrawal";
    }
  }

  return [title, buttonText, updateFormData];
}
