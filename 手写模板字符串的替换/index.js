function renderTemplate (template, data) {
  const reg = /\{\{(\w+)\}\}/;
  if (reg.test(template)) {
    const name = reg.exec(template)[1];
    template = template.replace(reg, data[name]);
    return renderTemplate(template, data);
  }
  return template
}

window.renderTemplate = renderTemplate;