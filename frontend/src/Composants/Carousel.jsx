import {Carousel, IconButton} from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";

export function CarouselDefault() {
    return (
        <div className={" mb-24"}>
            <h2 className={'text-bleuFonce text-3xl text-center'}>Retrouvez des professionnels </h2>
            <Carousel id="carous" className="hidden xl:flex relative overflow-hidden rounded-xl"
                      prevArrow={({handlePrev}) => (
                          <IconButton
                              variant="text"
                              color="white"
                              size="lg"
                              onClick={handlePrev}
                              className="text-white bg-bleuFonce hover:bg-bleuFonce/50 !absolute top-2/4 left-4 -translate-y-2/4 "
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                  />
                              </svg>
                          </IconButton>
                      )}
                      nextArrow={({handleNext}) => (
                          <IconButton
                              variant="text"
                              color="white"
                              size="lg"
                              onClick={handleNext}
                              className="text-white bg-bleuFonce hover:bg-bleuFonce/50  !absolute top-2/4 !right-4 -translate-y-2/4"
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                  />
                              </svg>
                          </IconButton>
                      )}
                      autoplay={true}
                      loop={true}
            >
                <div className="flex gap-10">
                    <Card className="mt-6 h-[500px] w-1/3 text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image1ProMeet.jpg"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p>Coach de carrière:
                                Un professionnel expérimenté dans son domaine.
                                Il peut vous aider à identifier vos objectifs de carrière,
                                à élaborer des plans d'action, à améliorer vos compétences en recherche d'emploi et à
                                surmonter
                                les obstacles sur le chemin de votre progression professionnelle.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="mt-6 h-[500px] w-1/3 text-bleuFonce  border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5 ">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image2ProMeet.jpg"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Mentor:
                                Un mentor professionnel est une personne ayant une vaste expérience dans un domaine
                                spécifique
                                et qui offre des conseils, un soutien et des conseils à des professionnels moins
                                expérimentés.
                                Les mentors peuvent partager leurs connaissances, leurs compétences et leur réseau
                                professionnel pour aider les autres à progresser dans leur carrière.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="mt-6 h-[500px] w-1/3 text-bleuFonce  border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5 h-50">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image3ProMeet.jpg"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Conseiller:
                                Les conseillers en orientation professionnelle sont formés pour aider les individus à
                                explorer leurs intérêts,
                                leurs valeurs, leurs compétences et leurs objectifs professionnels.
                                Ils fournissent un soutien personnalisé pour aider les individus à prendre des décisions
                                éclairées concernant leur carrière.
                            </p>
                        </CardBody>
                    </Card>
                    {/* 2me slide */}
                </div>
                <div className="flex gap-10">
                    <Card className="mt-6 h-[500px] w-1/3 text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5 h-50">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image4ProMeet.png"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Expert en reconversion professionnelle:
                                Les experts en reconversion professionnelle aident les professionnels à naviguer dans
                                des transitions de carrière importantes,
                                telles que le changement de secteur d'activité ou le passage à une nouvelle carrière.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="mt-6 h-[500px] w-1/3 text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5 h-50">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image5ProMeet.jpg"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p> Formateur:
                                Ces professionnels offrent des programmes de formation, des ateliers et des conseils sur
                                des sujets liés au développement professionnel,
                                tels que le perfectionnement des compétences, la gestion du temps, la communication
                                efficace et le leadership.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="mt-6 h-[500px] w-1/3 text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5 h-50">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image6ProMeet.jpeg"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Expert en ressources humaines : Les experts en ressources humaines peuvent fournir des
                                conseils sur une variété de sujets liés à la carrière, y compris les meilleures
                                pratiques en matière de recrutement,
                                la gestion des performances,
                                le développement du personnel et la résolution de problèmes en milieu de travail.
                            </p>
                        </CardBody>
                    </Card>
                </div>
            </Carousel>
            <Carousel id="carous" className="hidden md:flex xl:hidden relative overflow-hidden rounded-xl"
                      prevArrow={({handlePrev}) => (
                          <IconButton
                              variant="text"
                              color="white"
                              size="lg"
                              onClick={handlePrev}
                              className="text-white bg-bleuFonce hover:bg-bleuFonce/50 !absolute top-2/4 left-4 -translate-y-2/4 "
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                  />
                              </svg>
                          </IconButton>
                      )}
                      nextArrow={({handleNext}) => (
                          <IconButton
                              variant="text"
                              color="white"
                              size="lg"
                              onClick={handleNext}
                              className="text-white bg-bleuFonce hover:bg-bleuFonce/50  !absolute top-2/4 !right-4 -translate-y-2/4"
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                  />
                              </svg>
                          </IconButton>
                      )}
                      autoplay={true}
                      loop={true}
            >
                <div className={'flex justify-center gap-10 lg:gap-20'}>
                    <Card
                        className="mt-6 h-[500px] w-full lg:w-1/3 text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image1ProMeet.jpg"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p>Coach de carrière:
                                Un professionnel expérimenté dans son domaine.
                                Il peut vous aider à identifier vos objectifs de carrière,
                                à élaborer des plans d'action, à améliorer vos compétences en recherche d'emploi et à
                                surmonter
                                les obstacles sur le chemin de votre progression professionnelle.
                            </p>
                        </CardBody>
                    </Card>
                    <Card
                        className="mt-6 h-[500px] w-full lg:w-1/3 text-bleuFonce  border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5 ">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image2ProMeet.jpg"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Mentor:
                                Un mentor professionnel est une personne ayant une vaste expérience dans un domaine
                                spécifique
                                et qui offre des conseils, un soutien et des conseils à des professionnels moins
                                expérimentés.
                                Les mentors peuvent partager leurs connaissances, leurs compétences et leur réseau
                                professionnel pour aider les autres à progresser dans leur carrière.
                            </p>
                        </CardBody>
                    </Card>
                </div>
                <div className={'flex justify-center gap-10 lg:gap-20'}>
                    <Card
                        className="mt-6 h-[500px] w-full lg:w-1/3 text-bleuFonce  border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5 h-50">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image3ProMeet.jpg"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Conseiller:
                                Les conseillers en orientation professionnelle sont formés pour aider les individus à
                                explorer leurs intérêts,
                                leurs valeurs, leurs compétences et leurs objectifs professionnels.
                                Ils fournissent un soutien personnalisé pour aider les individus à prendre des décisions
                                éclairées concernant leur carrière.
                            </p>
                        </CardBody>
                    </Card>
                    <Card
                        className="mt-6 h-[500px] w-full lg:w-1/3 text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5 h-50">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image4ProMeet.png"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Expert en reconversion professionnelle:
                                Les experts en reconversion professionnelle aident les professionnels à naviguer dans
                                des transitions de carrière importantes,
                                telles que le changement de secteur d'activité ou le passage à une nouvelle carrière.
                            </p>
                        </CardBody>
                    </Card>
                </div>
                <div className={'flex justify-center gap-10 lg:gap-20'}>
                    <Card
                        className="mt-6 h-[500px] w-full lg:w-1/3 text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5 h-50">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image5ProMeet.jpg"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p> Formateur:
                                Ces professionnels offrent des programmes de formation, des ateliers et des conseils sur
                                des sujets liés au développement professionnel,
                                tels que le perfectionnement des compétences, la gestion du temps, la communication
                                efficace et le leadership.
                            </p>
                        </CardBody>
                    </Card>
                    <Card
                        className="mt-6 h-[500px] w-full lg:w-1/3 text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                        <CardHeader color="blue-gray" className="mt-5 h-50">
                            <img
                                className="object-cover h-[250px] w-full"
                                src="public/image6ProMeet.jpeg"
                                alt="card-image"></img>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Expert en ressources humaines : Les experts en ressources humaines peuvent fournir des
                                conseils sur une variété de sujets liés à la carrière, y compris les meilleures
                                pratiques en matière de recrutement,
                                la gestion des performances,
                                le développement du personnel et la résolution de problèmes en milieu de travail.
                            </p>
                        </CardBody>
                    </Card>
                </div>
            </Carousel>
            <Carousel id="carous" className="flex md:hidden  relative overflow-hidden rounded-xl"
                      prevArrow={({handlePrev}) => (
                          <IconButton
                              variant="text"
                              color="white"
                              size="lg"
                              onClick={handlePrev}
                              className="text-white bg-bleuFonce hover:bg-bleuFonce/50 !absolute -bottom-4 left-2 -translate-y-2/4 "
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                  />
                              </svg>
                          </IconButton>
                      )}
                      nextArrow={({handleNext}) => (
                          <IconButton
                              variant="text"
                              color="white"
                              size="lg"
                              onClick={handleNext}
                              className="text-white bg-bleuFonce hover:bg-bleuFonce/50  !absolute -bottom-4 !right-2 -translate-y-2/4"
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="h-6 w-6"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                  />
                              </svg>
                          </IconButton>
                      )}
                      autoplay={true}
                      loop={true}
            >
                <Card
                    className="mt-6 h-[650px] w-full mx-auto text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                    <CardHeader color="blue-gray" className="mt-5">
                        <img
                            className="object-cover h-[250px] w-[300px]"
                            src="public/image1ProMeet.jpg"
                            alt="card-image"></img>
                    </CardHeader>
                    <CardBody>
                        <p>Coach de carrière:
                            Un professionnel expérimenté dans son domaine.
                            Il peut vous aider à identifier vos objectifs de carrière,
                            à élaborer des plans d'action, à améliorer vos compétences en recherche d'emploi et à
                            surmonter
                            les obstacles sur le chemin de votre progression professionnelle.
                        </p>
                    </CardBody>
                </Card>
                <Card
                    className="mt-6 h-[650px] w-full mx-auto text-bleuFonce  border border-bleuFonce bg-nuanceBlanc">
                    <CardHeader color="blue-gray" className="mt-5 ">
                        <img
                            className="object-cover h-[250px] w-[300px]"
                            src="public/image2ProMeet.jpg"
                            alt="card-image"></img>
                    </CardHeader>
                    <CardBody>
                        <p>
                            Mentor:
                            Un mentor professionnel est une personne ayant une vaste expérience dans un domaine
                            spécifique
                            et qui offre des conseils, un soutien et des conseils à des professionnels moins
                            expérimentés.
                            Les mentors peuvent partager leurs connaissances, leurs compétences et leur réseau
                            professionnel pour aider les autres à progresser dans leur carrière.
                        </p>
                    </CardBody>
                </Card>
                <Card
                    className="mt-6 h-[650px] w-full mx-auto text-bleuFonce  border border-bleuFonce bg-nuanceBlanc">
                    <CardHeader color="blue-gray" className="mt-5 h-50">
                        <img
                            className="object-cover h-[250px] w-[300px]"
                            src="public/image3ProMeet.jpg"
                            alt="card-image"></img>
                    </CardHeader>
                    <CardBody>
                        <p>
                            Conseiller:
                            Les conseillers en orientation professionnelle sont formés pour aider les individus à
                            explorer leurs intérêts,
                            leurs valeurs, leurs compétences et leurs objectifs professionnels.
                            Ils fournissent un soutien personnalisé pour aider les individus à prendre des décisions
                            éclairées concernant leur carrière.
                        </p>
                    </CardBody>
                </Card>
                <Card
                    className="mt-6 h-[650px] w-full mx-auto text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                    <CardHeader color="blue-gray" className="mt-5 h-50">
                        <img
                            className="object-cover h-[250px] w-[300px]"
                            src="public/image4ProMeet.png"
                            alt="card-image"></img>
                    </CardHeader>
                    <CardBody>
                        <p>
                            Expert en reconversion professionnelle:
                            Les experts en reconversion professionnelle aident les professionnels à naviguer dans
                            des transitions de carrière importantes,
                            telles que le changement de secteur d'activité ou le passage à une nouvelle carrière.
                        </p>
                    </CardBody>
                </Card>
                <Card
                    className="mt-6 h-[650px] w-full mx-auto text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                    <CardHeader color="blue-gray" className="mt-5 h-50">
                        <img
                            className="object-cover h-[250px] w-[300px]"
                            src="public/image5ProMeet.jpg"
                            alt="card-image"></img>
                    </CardHeader>
                    <CardBody>
                        <p> Formateur:
                            Ces professionnels offrent des programmes de formation, des ateliers et des conseils sur
                            des sujets liés au développement professionnel,
                            tels que le perfectionnement des compétences, la gestion du temps, la communication
                            efficace et le leadership.
                        </p>
                    </CardBody>
                </Card>
                <Card
                    className="mt-6 h-[650px] w-full mx-auto text-bleuFonce border border-bleuFonce bg-nuanceBlanc">
                    <CardHeader color="blue-gray" className="mt-5 h-50">
                        <img
                            className="object-cover h-[250px] w-[300px]"
                            src="public/image6ProMeet.jpeg"
                            alt="card-image"></img>
                    </CardHeader>
                    <CardBody>
                        <p>
                            Expert en ressources humaines : Les experts en ressources humaines peuvent fournir des
                            conseils sur une variété de sujets liés à la carrière, y compris les meilleures
                            pratiques en matière de recrutement,
                            la gestion des performances,
                            le développement du personnel et la résolution de problèmes en milieu de travail.
                        </p>
                    </CardBody>
                </Card>
            </Carousel>
        </div>
    );
}
