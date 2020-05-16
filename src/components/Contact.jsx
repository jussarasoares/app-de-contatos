import React from "react";

class Contact extends React.Component {
  formatDate(date) {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("pt-br", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("pt-br", { month: "2-digit" }).format(d);
    const da = new Intl.DateTimeFormat("pt-br", { day: "2-digit" }).format(d);
    return `${da}/${mo}/${ye}`;
  }

  render() {
    const { data } = this.props;

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={data.avatar} alt={data.name} />
        </span>
        <span className="contact__data" data-testid="contact-name">
          {data.name}
        </span>
        <span className="contact__data" data-testid="contact-phone">
          {data.phone}
        </span>
        <span className="contact__data" data-testid="contact-country">
          {data.country}
        </span>
        <span className="contact__data" data-testid="contact-date">
          {this.formatDate(data.admissionDate)}
        </span>
        <span className="contact__data" data-testid="contact-company">
          {data.company}
        </span>
        <span className="contact__data" data-testid="contact-department">
          {data.department}
        </span>
      </article>
    );
  }
}

export default Contact;
