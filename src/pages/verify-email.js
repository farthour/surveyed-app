import PageLayout from "../components/layouts/PageLayout";
import EmailVerification from "../components/auth/EmailVerification";

function VerifyEmailPage() {
  return (
    <PageLayout pageTitle="Verify Email">
      <EmailVerification />
    </PageLayout>
  );
}

export default VerifyEmailPage;
