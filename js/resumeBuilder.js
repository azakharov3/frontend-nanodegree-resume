var bio = {
    name: "Andrey Zakharov",
    role: "QA Engineer",
    contactInfo: {
        email: "a.zakharov3@gmail.com",
        phone: "760-576-9573",
        linkedIn: "https://www.linkedin.com/in/azakharov1"
    },
    welcomeMsg: "I am a QA Engineer Passionate about Test Automation",
    pictureUrl: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAimAAAAJDNiOWFhNmVmLWUwNDMtNDc2OS05MzlmLWI4NGM4MTcyNjM4OQ.jpg",
    skills: ["Test Automation", "Test Strategy", "Load Testing", "QA Lead"],
    display: function(){
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMsg);
        $("#header").append(formattedMessage);

        var formattedPhone = HTMLmobile.replace("%data%", this.contactInfo.phone);
        $("#topContacts").append(formattedPhone);
        $("#footerContacts").append(formattedPhone);

        var formattedEmail = HTMLemail.replace("%data%", this.contactInfo.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);

        var formattedLinkedIn = HTMLlinkedin.replace("%data%", this.contactInfo.linkedIn);
        $("#topContacts").append(formattedLinkedIn);
        $("#footerContacts").append(formattedLinkedIn);

        var formattedPicture = HTMLbioPic.replace("%data%", this.pictureUrl);
        $("#header").append(formattedPicture);

        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skillIndex in this.skills) {
                var formattedSkill = HTMLskills.replace("%data%", this.skills[skillIndex]);
                $("#header").append(formattedSkill);
            }
        }
    }
};
bio.display();

var work = {
    companies: [
        {
            "employer": "Freedomvoice a GoDaddy Company",
            "url" : "https://www.freedomvoice.com",
            "position": "QA Automation Engineer",
            "dates": "October 2014 - till present",
            "city": "Encinitas, CA",
            "description":
                "Developed an integration test automation framework for web application, business phone device, mobile app and API"
                + "<br/>" + "Managed company's test automation efforts"
                + "<br/>" + "Scheduled test runs, reviewed results and reported a gazillion of bugs."
                + "<br/>" + "Developed and executed load testing script scenarios"
                + "<br/>" + "Led the team of QA Testers in absence of QA Manager"
                + "<br/>" + "Trained other team members in Test Automation"

        },
        {
            "employer": "HealthFusion Inc.",
            "url" : "https://www.healthfusion.com",
            "position": "QA Engineer",
            "dates": "May 2012 - October 2014",
            "city": "Solana Beach, CA",
            "description":
                "Created test automation framework for web application functional validation"
                + "<br/>" + "Performed regression testing of an incredibly complex medical software product."
                + "<br/>" + "Tested all improvements to meet the requirements of Meaningful Use Stage 1 and Stage 2 (cms.gov program)"
                + "<br/>" + "Tested thousands and thousands of new features, improvements and fixes."
                + "<br/>" + "Wrote scripts to test DDoS attack prevention measures."
                + "<br/>" + "Gave multiple product trainings and became go-to person for new employees."
        },
        {
            "employer": "Pathway Genomics",
            "url": "https://www.pathway.com",
            "position": "Qulity Assurance Engineer / Tester",
            "dates": "Nov 2010 - May 2012",
            "city": "San Diego, CA",
            "description":
                "Completed QA of a key product localization: Russian, Spanish, Polish, Portuguese, Turkish languages."
                + "<br/>" + "Performed corporate web-site localization in Russian (ru.pathway.com)."
                + "<br/>" + "Tested FDA regulated software product: Personal Genetic Report."
                + "<br/>" + "Created and executed regression test plans for Customer Web Portal; Customer Service Application; Corporate Web Site; API engine for partners."
                + "<br/>" + "Developed translation workflow. Mentored and performed technical orientation for Spanish, Polish, Portuguese translators. Contributed to signing contracts with Russian partners."
        },
        {
            "employer": "BBraun Medical, Russian Branch",
            "url": "https://www.bbraun.com",
            "position": "Business development representative (South Ural)",
            "dates": "Aug 2009 - Sep 2010",
            "city": "Saint Petersburg, Russia",
        },
        {
            "employer": "Biomet Inc., Russian Branch",
            "url": "https://www.biomet.com/",
            "position": "Product Specialist/Sales Representative (Hip and Knee joint replacement), Chelyabinsk Region",
            "dates": "Sep 2006 - Aug 2009",
            "city": "Moscow, Russia"
        }

    ],
    displayWork: function () {
        for (var jobIndex in work.companies) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.companies[jobIndex].employer);
            var formattedJobTitle = HTMLworkTitle.replace("%data%", work.companies[jobIndex].position);
            var formattedEmployerTitle = formattedEmployer + formattedJobTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            if (this.companies[jobIndex].url != null)
                $(".work-entry:last a").attr("href", this.companies[jobIndex].url)

            var formattedDates = HTMLworkDates.replace("%data%", work.companies[jobIndex].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription;
            if (this.companies[jobIndex].description != null) {
                formattedDescription = HTMLworkDescription.replace("%data%", work.companies[jobIndex].description);
            }
            else
            {
                formattedDescription = HTMLworkDescription.replace("%data%", "");
            }
            $(".work-entry:last").append(formattedDescription);
        }
    }
}
work.displayWork();


var education = {
    schools: [
        {
            "name": "Chelyabinsk State Medical Academy",
            "major": "Healthcare Administration",
            "dates": "2000 - 2006",
            "degree": "BD",
            "city": "Chelyabinsk, Russia"
        }
    ],
    display: function () {
        for (var i = 0; i < this.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
        }
    }
};
education.display();

function inName(nameToConvert)
{
    var name = nameToConvert.trim().split(" ")
    var firstName = name[0];
    var lastName = name[1];
    firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.toUpperCase();
    return firstName + " " + lastName;
}

