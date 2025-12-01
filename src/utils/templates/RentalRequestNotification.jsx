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
  Row,
  Hr
} from '@react-email/components';
import dayjs from 'dayjs';

const AdminNewRentalRequest = ({
  name,
  phone,
  modelCar,
  pickupDate,
  returnDate,
  airportCode,
  airportCity,
  totalDays,
  totalAmount,
  bookingId
}) => {
  return (
    <Html>
      <Head />
      <Preview>Nueva solicitud de alquiler recibida - {name}</Preview>
      <Body style={main}>
        <Container>
          {/* Header con Logo */}
          <Section style={header}>
            <Img
              style={image}
              src={'https://hwnmyoffjbrscrcmkvtf.supabase.co/storage/v1/object/public/assets/logo/main_logo.png'}
              alt="JR Drive Logo"
            />
          </Section>

          {/* Contenido Principal */}
          <Section style={content}>
            <Column style={{ ...boxInfos, paddingBottom: '0' }}>
              <Heading
                style={{
                  fontSize: 28,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#333',
                  margin: '0 0 15px 0',
                }}
              >
                Nueva Solicitud
              </Heading>

              <Text style={{ ...paragraph, textAlign: 'center', marginTop: 0 }}>
                El cliente <b>{name}</b> ha realizado una nueva solicitud de alquiler.
              </Text>

              {/* Botón de Acción */}
              <Section style={{ textAlign: 'center', margin: '20px 0' }}>
                <Button
                  style={button}
                  href={`https://www.jr-drive.com/admin/${bookingId}`}
                >
                  Gestionar Solicitud
                </Button>
              </Section>

              <Hr style={{ borderColor: '#e5e7eb', margin: '20px 0' }} />

              {/* Resumen en caja gris */}
              <Text style={sectionHeader}>Resumen de la solicitud:</Text>
              <Section style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
                <Text style={{ margin: '5px 0', fontSize: '14px', color: '#333' }}>
                  <b>Coche: </b>{modelCar}
                </Text>
                <Text style={{ margin: '5px 0', fontSize: '14px', color: '#333' }}>
                  <b>Ingreso: </b>${totalAmount} ({totalDays} días)
                </Text>
                <Text style={{ margin: '5px 0', fontSize: '14px', color: '#333' }}>
                  <b>Cliente: </b>{name}
                </Text>
                <Text style={{ margin: '5px 0', fontSize: '14px', color: '#333' }}>
                  <b>Contacto: </b>{phone}
                </Text>
              </Section>

              {/* Logística */}
              <Section style={{ marginTop: '20px' }}>
                <Text style={{ ...paragraph, margin: '5px 0 15px 0' }}>
                  <b>Ubicación: </b>
                  {`${airportCode} - ${airportCity}`}
                </Text>
                <Row>
                  <Column>
                    <Text style={{ ...paragraph, textDecoration: 'underline', marginBottom: '5px' }}>
                      <b>Recogida:</b>
                    </Text>
                    <Text style={{ margin: '0', fontSize: '14px' }}>
                      <b>Fecha: </b>
                      {dayjs(pickupDate).format('DD/MM/YYYY')}
                    </Text>
                    <Text style={{ margin: '0', fontSize: '14px' }}>
                      <b>Hora: </b>
                      {dayjs(pickupDate).format('HH:mm')}
                    </Text>
                  </Column>
                  <Column>
                    <Text style={{ ...paragraph, textDecoration: 'underline', marginBottom: '5px' }}>
                      <b>Devolución:</b>
                    </Text>
                    <Text style={{ margin: '0', fontSize: '14px' }}>
                      <b>Fecha: </b>
                      {dayjs(returnDate).format('DD/MM/YYYY')}
                    </Text>
                    <Text style={{ margin: '0', fontSize: '14px' }}>
                      <b>Hora: </b>
                      {dayjs(returnDate).format('HH:mm')}
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Hr style={{ borderColor: '#e5e7eb', margin: '20px 0' }} />

              <Text style={{ ...paragraph, fontSize: 14, color: '#666', textAlign: 'center' }}>
                Verifica el inventario antes de contactar al cliente.
              </Text>
            </Column>
          </Section>

          {/* Footer */}
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
              marginTop: '20px'
            }}
          >
            © 2025 | JR Drive Internal System
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminNewRentalRequest;

// Estilos
const main = {
  backgroundColor: '#f4f4f4',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: '20px 0'
};

const paragraph = {
  fontSize: 16,
  lineHeight: '24px',
  color: '#333',
};

const header = {
  backgroundColor: '#01260E',
  padding: '15px 0',
  textAlign: 'center',
  borderRadius: '5px 5px 0 0'
};

const sectionHeader = {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 0,
  marginBottom: 10,
  color: '#01260E'
};

const button = {
  backgroundColor: '#01260E',
  borderRadius: '5px',
  color: '#fff',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  width: '200px',
  padding: '12px 0',
  fontSize: '16px',
};

const content = {
  backgroundColor: '#ffffff',
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '0 0 5px 5px',
  overflow: 'hidden',
};

const image = {
  width: '280px',
  height: 'auto',
  display: 'block',
  margin: '0 auto',
};

const boxInfos = {
  padding: '30px',
};