import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const WordPress = () => {
  return (
    <Layout ptitle="WordPress">
        <Container>
        <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/wordpress-banner.png' alt='wordpress'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Certified WordPress Web Development Course</h1>
                    </div>
                    <div>
                        <p>This course is designed to provide students with the knowledge and skills required to customize WordPress themes and 
                            plugins. Students will learn how to use WordPress functions, hooks, and filters to extend and modify WordPress 
                            functionality. By the end of the course, students will be able to customize WordPress themes and plugins to meet 
                            specific requirements.</p>
                        <h2>Brief Contents :</h2>
                        <ul>
                            <li><b> WordPress Foundation </b></li>
                            <ul>
                            <li> Introduction to WordPress</li>
                            <li> Difference between wordpress.com and wordpress.org</li>
                            <li> WordPress Installation</li>
                            <li> Installing WordPress on a live server</li>
                            <li> Installing WordPress on the local server</li>
                            <li> Activating WordPress Themes</li>
                        </ul>
                            <li><b> WordPress Administrator</b></li>
                        <ul>
                            <li> WordPress Dashboard & Updates Screen</li>
                            <li> Version, Release, and Modification Updates</li>
                            <li> WordPress Themes and Plugins Compatibility</li>
                            <li> Upgrading to the Latest WordPress Release</li>
                        </ul>
                            <li><b> Creating Administrator Posts</b></li>
                        <ul>
                            <li> Setting Up Categories and Tags</li>
                            <li> Understanding Posts Title and Content</li>
                            <li> Setting the Featured Image</li>
                            <li> Configuring the Publish Area</li>
                            <li> Difference between Visual and Text Editor</li>
                            <li> Using HTML to Extend Page Content</li>
                        </ul>
                            <li><b> Creating Administrator Pages</b></li>
                            <ul>
                            <li> Differences between Pages and Posts</li>
                            <li> Creating Home & Blog Pages</li>
                            <li> Creating Your Basic Website Pages</li>
                            </ul>
                            <li><b> Creating Administrator Menus</b></li>
                            <ul>
                            <li> Creating Your First Menu</li>
                            <li> Adding Pages, Posts, and Categories to Your Menu</li>
                            <li> Enabling Advanced Menu Options</li>
                            <li> Adding Custom Links to Your Menu</li>
                            </ul>
                            <li><b> Hyperlinks</b></li>
                            <ul>
                            <li> Inserting hyperlinks to External Websites, Internal Pages & Download files</li>
                            </ul>
                            <li><b> Shortcodes</b></li>
                            <ul>
                            <li> Introduction to Shortcode</li>
                            <li> Use of Shortcode with Example</li>
                            </ul>
                            <li><b> Configuring Website Settings</b></li>
                            <ul>
                            <li> Configure General Settings</li>
                            <li> Configure Reading Settings</li>
                            <li> Configure Permalinks</li>
                            </ul>
                            <li><b> Media Library</b></li>
                            <ul>
                            <li> WordPress Image File Creation</li>
                            <li> Uploading and Managing Media Files</li>
                            </ul>
                            <li><b> WordPress Themes</b></li>
                            <ul>
                            <li> Installing and Configuring a Theme</li>
                            <li> Switching Between Themes</li>
                            <li> Adding Menu, Media, and Content to a Theme</li>
                            </ul>
                            <li><b> WordPress Plugins</b></li>
                            <ul>
                            <li> Introduction to Plugins</li>
                            <li> Installing, Updating, and deleting the plugin</li>
                            <li> Administering, Upgrading and Maintaining Plugins</li>
                            <li> Adding a Photo Gallery</li>
                            </ul>
                            <li><b> Elementor</b></li>
                            <ul>
                            <li> Complete understanding to Elementor & Elementor Pro</li>
                            <li> Page building with Elementor</li>
                            <li> Page building with Elementor Pro</li>
                            </ul>
                            <li><b> Contact Form</b></li>
                            <ul>
                            <li> Creating a Contact Form</li>
                            </ul>
                            <li><b> Widgets and Sidebars</b></li>
                            <ul>
                            <li> Introduction to Widget</li>
                            <li> Introduction to Sidebar</li>
                            <li> Add & Remove Widgets</li>
                            <li> Adding Text, Posts, Images and other types of widgets</li>
                            </ul>
                            <li><b> Slideshow</b></li>
                            <ul>
                            <li> Creating a Slideshow</li>
                            <li> Using the Theme’s Built-in Slideshow Feature</li>
                            <li> Installing a Slideshow Plugin</li>
                            <li> Adding the Slideshow to a Page</li>
                            <li> Adding a Slideshow to a Sidebar</li>
                            </ul>
                            <li><b> Social Media Buttons</b></li>
                            <ul>
                            <li> Using a Plugin to Add Social Media Buttons</li>
                            <li> Adding Social Media Buttons to a Widget</li>
                            <li> Using the Theme’s Option to Add a Social Media Button</li>
                            </ul>
                            <li><b> Inserting Google Map</b></li>
                            <li><b> WordPress Web Security</b></li>
                            <ul>
                            <li> Installing & Activating the Security Plugin</li>
                            <li> Scanning Your Website for Vulnerabilities</li>
                            </ul>
                            <li><b> Redirecting Pages</b></li>
                            <ul>
                            <li> Redirect Pages to different Pages & Sites</li>
                            </ul>
                            <li><b> Backing up the Website</b></li>
                            <ul>
                            <li> Creating a Backup</li>
                            </ul>
                            <li><b> Final Project</b></li>
                            <ul>
                            <li> Creating a Complete Website in WordPress</li>
                            <li> Landing Page</li>
                            <li> Blogging Page</li>
                            <li> Business Portfolio</li>
                            <li> Making an E-commerce Store</li>
                            </ul>
                            <li><b> Customizing the Theme Using Code</b></li>
                            <ul>
                            <li> Intro to HTML5</li>
                            <li> Intro to CSS3</li>
                            <li> Change the appearance of the site using HTML and CSS code</li>
                            <li> Adding an additional CSS to your Theme code</li>
                            <li> Changing the position of the Theme components using CSS code</li>
                            </ul>
                            <li><b> Deployment on Live server</b></li>
                            <ul>
                            <li> Deploy your Website on live server</li>
                            <li> Testing, Debugging & Publishing Website to a Commercial Server</li>
                            </ul>
                        </ul>
                        <h2>Training Methodology</h2>
                        <ul>
                            <li>Lectures & Demos by industry experts</li>
                            <li>Project Driven Hands-On approach</li>
                            <li>Focus on latest tools, technologies & industry practices</li>
                            <li>Projects, assignments & quizzes for student’s evaluation</li>
                        </ul>
                        <h2>Audience</h2>
                        <ul>
                            <li>Any One Intrested in web Development.</li>
                        </ul>
                        <h2>Course Project</h2>
                        <p>Participants of the course will prove their proficiency in WordPress Customization by developing
                            commercial level WordPress websites and E-commerce Store.
                        </p>
                        <h2>Duration & Frequency</h2>
                        <p>3 Months (12 weeks) with 3 training sessions of 1.5 hours a week.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout>
  )
}
export const Head = () => <Seo title="Course" />
export default WordPress