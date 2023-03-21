import Footer from '../components/Footer';
import '../HomePage.css';

function HomePage() {
    return (
      <div>
        <h1>Welcome to the homepage</h1>
        <p>This is the homepage of the website.</p>
        <p>Feel free to look around and explore!</p>
        <div class="image-container">
        <img src={`${process.env.PUBLIC_URL}/images/sample.jpg`} alt="sample" class="image" />
        <div class="description">
          <p>ガレヲン様のイラストです</p>
        </div>
      </div>
        <Footer />
      </div>
    );
  }
  
  export default HomePage;
  