import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@SpringBootApplication
@RestController
public class EmailController {

    @Autowired
    private JavaMailSender emailSender;

    public static void main(String[] args) {
        SpringApplication.run(EmailController.class, args);
    }

    @PostMapping("/sendEmail")
    public String sendEmail(@RequestBody String commentText) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("20237239@s.ubaguio.edu"); // Set your email address here
        message.setSubject("New comment from your website");
        message.setText(commentText);

        emailSender.send(message);

        return "Email sent successfully!";
    }
}
