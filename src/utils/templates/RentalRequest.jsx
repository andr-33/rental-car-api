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
  Row,
  Section,
  Text,
  Hr
} from '@react-email/components';

const DominicarRentalRequestEmail = ({
  modelCar,
  pickupDate,
  pickupTime,
  pickupAirport,
  returnDate,
  returnTime,
  returnAirport,
  name,
  documento,
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
        <Preview>Dominicar Rental Request</Preview>
        <Container>
          <Section style={header}>
            <Heading style={headerText}>Dominicar</Heading>
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={45}
                src={'https://www.pinclipart.com/picdir/big/563-5639396_car-rental-logo-png-clipart.png'}
                alt="Dominicar header illustration"
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Hi {name},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Thank you for your rental request with Dominicar!
                </Heading>

                <Text style={sectionHeader}>Information del cliente:</Text>
                <Text style={paragraph}>
                  <b>Name: </b>
                  {name}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Document ID: </b>
                  {documento}
                </Text>
                <Hr className="my-[16px] border-gray-300" />
                <Text style={sectionHeader}>Detalles del alquiler:</Text>
                <Text style={paragraph}>
                  <b>Pickup Date: </b>
                  {formattedPickupDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Pickup Time: </b>
                  {pickupTime}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Pickup Location: </b>
                  {pickupAirport}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Return Date: </b>
                  {formattedReturnDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Return Time: </b>
                  {returnTime}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Return Location: </b>
                  {returnAirport}
                </Text>
                <Hr className="my-[16px] border-gray-300" />
                <Text style={sectionHeader}>Detalles del coche:</Text>
                <Text style={paragraph}>
                  <b>Model: </b>
                  {modelCar}
                </Text>

                <Text style={paragraph}>
                  Your rental request is being processed. We will contact you soon to confirm your booking.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  If you have any questions, please visit our support page or contact our team.
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Column style={buttonContainer} colSpan={2}>
                <Button style={button}>Contact Support</Button>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={45}
              src={'https://www.pinclipart.com/picdir/big/563-5639396_car-rental-logo-png-clipart.png'}
              alt="Dominicar footer decoration"
            />
          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © 2025 | Dominicar, Puerto Plata, Dominican Republic | www.dominicar.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default DominicarRentalRequestEmail;

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
  backgroundColor: '#2ecc71',
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

const buttonContainer = {
  textAlign: 'center',
};

const button = {
  backgroundColor: '#2ecc71',
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

const containerImageFooter = {
  padding: '45px 0 0 0',
};