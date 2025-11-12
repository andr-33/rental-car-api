import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Hr
} from '@react-email/components';

const RentalRequestConfirmation = ({
  modelCar,
  pickupDate,
  pickupTime,
  pickupAirport,
  returnDate,
  returnTime,
  returnAirport,
  name,
}) => {
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Unknown Date';
      }
      return new Intl.DateTimeFormat('en', {
        dateStyle: 'long',
      }).format(date);

    } catch (error) {
      throw new Error('Invalid date format');
    }
  };

  const formattedPickupDate = formatDate(pickupDate);
  const formattedReturnDate = formatDate(returnDate);

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>JR Drive Rental Request</Preview>
        <Container>
          <Section style={header}>
            <Heading style={headerText}>JR Drive</Heading>
            <Text style={paragraph}>By Jonathan Rodz</Text>
          </Section>

          <Section style={content}>
            <Img
              style={image}
              width={45}
              src={'https://hwnmyoffjbrscrcmkvtf.supabase.co/storage/v1/object/public/assets/logo/main_logo.png'}
              alt="JR Drive header illustration"
            />

            <Column style={{ ...boxInfos, paddingBottom: '0' }}>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                Hola {name},
              </Heading>
              <Heading
                as="h2"
                style={{
                  fontSize: 26,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                Gracias por confiar en JR Drive!
              </Heading>
              <Text style={paragraph}>
                Tu solicitud de alquiler está siendo procesada. Te contactaremos pronto para confirmar tu reserva.
              </Text>
              <Text style={paragraph}>
                Si tienes alguna pregunta, por favor visita nuestra página de soporte o contacta con nuestro equipo.
              </Text>
              <Hr className="my-[16px] border-gray-300" />
              <Text style={sectionHeader}>Detalles de tu alquiler:</Text>
              <Container>
                <Text>Recogida:</Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Aeropuerto: </b>
                  {pickupAirport}
                </Text>
                <Text style={paragraph}>
                  <b>Fecha: </b>
                  {formattedPickupDate}
                </Text>
                <Text style={paragraph}>
                  <b>Hora: </b>
                  {pickupTime}
                </Text>
              </Container>
              <Container>
                <Text>Devolución:</Text>
                <Text style={paragraph}>
                  <b>Aeropuerto: </b>
                  {returnAirport}
                </Text>
                <Text style={paragraph}>
                  <b>Fecha: </b>
                  {formattedReturnDate}
                </Text>
                <Text style={paragraph}>
                  <b>Hora: </b>
                  {returnTime}
                </Text>
              </Container>
              <Hr className="my-[16px] border-gray-300" />
              <Text style={sectionHeader}>Detalles del coche:</Text>
              <Text style={paragraph}>
                <b>Model: </b>
                {modelCar}
              </Text>

              <Button style={button}>Contact Support</Button>
            </Column>
          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © 2025 | JR Drive by Jonathan Rodz, República Dominicana | www.jr-drive.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default RentalRequestConfirmation;

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const header = {
  padding: '30px 20px',
  backgroundColor: '#01260E',
  textAlign: 'center',
};

const headerText = {
  fontSize: 36,
  fontWeight: 'bold',
  color: '#fff',
  margin: 0,
};

const sectionHeader = {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 20,
  marginBottom: 10,
};

const button = {
  backgroundColor: '#01260E',
  borderRadius: 3,
  color: '#fff',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
  display: 'inline-block',
  padding: '12px 30px',
  textDecoration: 'none',
};

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
};

const image = {
  maxWidth: '100%',
};

const boxInfos = {
  padding: '20px',
};