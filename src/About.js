const About = () => {
  return (
    <main className="About">
      <h2>About</h2>
      <p style={{ marginTop: '1rem' }}>
        <div>
          This blog app is a project created with React.js & JSON server.
          <br />
          At home page, can check all blog posts with date time and initial
          slice. <br />
          At post page, you can edit post which already posted in home page.{' '}
          <br />
          You can also delete post which you want to.
        </div>
      </p>
    </main>
  );
};

export default About;
