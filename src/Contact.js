import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4847317077138!2d72.88639711194253!3d19.0863794820457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c887efb78b9f%3A0x9f9dc99c3119470a!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1709023739809!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xleqnldy"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              // value=""
            ></input>

            <input
              type="email"
              placeholder="email"
              name="Email"
              required
              autoComplete="off"
              // value=""
            ></input>

            <textarea
              name="Message"
              placeholder="Enter Your Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" value="send"></input>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
