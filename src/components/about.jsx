import React from "react";
import { createFromIconfontCN, Html5Filled, DatabaseFilled } from '@ant-design/icons';
// import myImage from "../img/myImage.png";


const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "0%",
          value: "75",
          logo: <IconFont type='icon-python'/>
        },
        {
          id: "Django_skill",
          content: "Django & Django REST framework",
          porcentage: "0%",
          value: "75"
        },
        { id: "HTML5_skill", content: "HTML5 & CSS3", porcentage: "0%", value: "80", logo: <Html5Filled /> },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "0%",
          value: "90",
          logo: <IconFont type='icon-javascript'/>
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "0%",
          value: "80"
        },
        {
          id: "PostgreSQL_skill",
          content: "PostgreSQL",
          porcentage: "0%",
          value: "90",
          logo: <DatabaseFilled />
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:"I'm a Fullstack Web Developer, Python Developer and Software Engineer from London, Uk. \
          I specialise in creating web application and software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. \
          What would you do if you had a software expert available at your fingertips?"
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="title-box-2">
                        <h5 className="title-left">Skills</h5>
                      </div> */}
                    <div className="skill-mf">
                    
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                            {skill.logo ? 
                            
                            skill.logo 
                            : 
                            <></>}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
