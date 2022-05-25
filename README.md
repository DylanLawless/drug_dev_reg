# Drug/Device Product Development and Regulation – Europe and US

## About
This repo is the work done during the course n EPFL by Educate4Life:
_Drug/Device Product Development and Regulation – Europe and US_.

The course starts on August 22 and ends on September 30, 2022. This is a 6-week intensive, case study-based course (60-70 hours in total).

<https://www.epfl.ch/schools/sv/school-of-life-sciences/innovation/catalyze4life/educate4life/>

## Coursebook
[Open PDF - Europe-and-US-DrugDevice-Product-Development-and-Regulations-course-program_20220503.pdf](./doc/Europe-and-US-DrugDevice-Product-Development-and-Regulations-course-program_20220503.pdf)

## The “meet-the-instructors” sessions 
* SV 1717
* Monday,	August 22 from 13:30 to 15:30.
* Thursday,	August 25 from 10:00 to 12:00.
* Thursday,	September 01 from 16:30 to 19:00.
* Thursday,	September 15 from 16:30 to 19:00.
* Thursday,	September 22 from 16:30 to 19:00.
* Thursday,	September 29 from 16:30 to 19:00.

## PROGRAM
#### Enroll
  - [x] Completed 202220525
[x] 
#### Week 1
	- [ ] Welcome by: Prof. Bart Deplancke, Vice Dean of Innovation, EPFL.
	- [ ] Keynote lecture Research to Business by: Dr. Seng Chin Mah, Chairman of the Board, BioVersys AG.
	- [ ] Drug Development Process, and External Case Study on Drug Detailed structure, content and deliverables of the course.
	- [ ] Explanation of multiple-choice quizzes (20 questions x 3).
	- [ ] Explanation of case studies and expectations.
	- [ ] Formation of teams with case studies and identification of group leaders.
	- [ ] Drug Development Process, Preclinical, clinical, CMC. EU Regulatory Process. Presented by: Gautam Maitra, EPFL SV, Catalyze4Life.
 	- [ ] Overview of Preclinical Requirements – small Molecules and Biotech Products. Presented by: Hasnaà Haddouk, Head of Biological Sciences & Non Clinical Safety Immunology at Sobi - Swedish Orphan Biovitrum, Geneva, Switzerland.
	- [ ] Clinical Trials in the EU and UK (post-Brexit). Presented by: Anne Hamel, Senior Manager Regulatory Affairs at AC Immune SA.
	- [ ] FONGIT – Raising the Initial Capital. Presented by: Emmanuel de Watteville, Head of Financing Programs
	- [ ] Satellite lecture – Preclinical Strategy for Developing Drugs in
Parkinson’s Disease. Presented by: Jan Stoehr, Head, Biology Parkinson's Disease at AbbVie Greater Boston.

### Week 2
	- [ ] Device Development Process, and External Case Study on Devices.
	- [ ] MDR, MedTech Regulatory landscape, Three Pillars – Technology, Biology, Clinical.
	- [ ] International Standards. Ary Saaman, Director, Device Technology Management, Alvotech Swiss AG.
	- [ ] Summary of US Regulations. Presented by: Ary Saaman.
	- [ ] Explanation of multiple-choice questions (20).

### Week 3
	- [ ] Role of Quality Compliance in the Regulated Industry.
	- [ ] Role of Quality and Compliance. Presented by: Claude Ammann, Claude Ammann Consulting, Epalinges, Switzerland.
	- [ ] US FDA, International Engagement, and the US-EU Mutual Recognition Agreement Presented by: Matthew Scherer, US Food and Drug Administration, Europe Office.
	- [ ] Explanation of multiple-choice questions (20).
	- [ ] Satellite Lecture - Biotechnology – Virus Filtration Regulatory updates. Presented by: Paul Cashen, Pall Biotech.
	- [ ] Satellite Lecture - Biotechnology – Virus Filtration Technology updates. Presented by: Lionnel Lueginbuehl, Pall Biotech

 ### Week 4
	- [ ] Intellectual Property – A key to Innovation - Intellectual Property in the 21st Century Presented by: Natalia Giovannini, Technology Transfer Manager at EPFL.
	- [ ] Intellectual Property Presented by: Bojana Portmann, AVP IP and Business Development at AC Immune, Lausanne, Vaud, Switzerland.

### Week 5
	- [ ] Project Management Presented by: Stephan Proennecke.

### Week 6
	- [ ] Managing Cultural Diversity in Scientific and Technical Professions. Presented by: Lionel Laroche, President at MultiCultural Business Solutions Inc.
	- [ ] CASE STUDY – Doing a Swiss Life Science PhD out of Tanzania – Challenges and Opportunities. Presented by: Lorenz Hofer, PhD Candidate, Swiss Tropical and Public Health Institute, Allschwil.

## The 10 Course Goals and Objectives

1. Understand the major steps of the drug and device development process through cross-functional teamwork and report writing with pre-set deadlines, reflecting real-life situation of challenges at work in industry.
2. Compare and contrast US and European Union regulatory and quality requirements (major markets setting best practices and standards).
3. Develop tools to interaction with regulators.
4. Understand the basics of a Quality Management System.
5. Develop a Product Profile for a drug/device product or therapy.
6. Draft the basic components of a Development Plan for a Phase 1 clinical trial, including a Preclinical Plan, a Clinical Trial Protocol, and CMC (Chemistry, Manufacturing and Controls) Plan.
7. Master the basics of early stage Project Management skills.
8. Learn the essentials of Intellectual Property Rights.
9. Learn the art of successful cross-cultural communication.
10. Feel more confident about job seeking and job interviews.

## Contact
Program Director : Gautam Maitra
Mail : catalyze4life@epfl.ch

## Cloning and keys
Since I work with others and use different accounts, machines, emails, here are some notes incase you or I need them.

To push to multiple github accounts with different keys,
and different machines, these settings can be used.
Instead of a global git config, local configs are used for each repo.
Here is the example with two of my repos.
The custom usernames for the local repo is shown (but custom email is removed to prevent spam).
[Create your ssh keys as per github recommendation](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). 
In the .ssh directory, the config file will assign the key to each git repository that you clone based on the Host that you use. i.e. custom instead of the default:

* git clone git@custom.github.com:accout/repo.git
* git clone git@github.com:accout/repo.git

``` bash 
## Set up the ssh config file
cd ~/.ssh/config

## set such that Host and User are custom
# lawlessgenomics repo
Host dylanlawless.github.com
  HostName github.com
  User DylanLawless
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/key1_rsa
  IdentitiesOnly yes

# sarscov2 repo
Host sarscov2voc.github.com
  HostName github.com
  User sars-cov-2-voc
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/key2_rsa
  IdentitiesOnly yes

```

Then clone your repo using the custom Host instead of the default provided by github when you use button "clone/ssh/copy".

``` bash
# Clone using the correct Host as per config.
# As shown at the end of this page, you may need to clone with submodules.
# You can do by add the "--recursive" flag. 
git clone --recursive git@dylanlawless.github.com:DylanLawless/drug_dev_reg

# Set the local user here (instead of global, i.e. /Users/user/.gitconfig)
cd "the clone repo dir"
git config user.email personemail@addess.com
git config user.name DylanLawless
```

You should now be able to pull and push from that repo without the ["incorrect user" problems](https://stackoverflow.com/questions/4665337/git-pushing-to-remote-github-repository-as-wrong-user).

