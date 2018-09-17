
import {
    SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider
} from "angular-6-social-login";

export function LoginSocial() {
    let config = new AuthServiceConfig(
        [
            {
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider("294242144500282")
            },
            {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider("502156801634-t6ebgi6la8v826qbipt6m4ncn3f4u9t3.apps.googleusercontent.com")
            },
            {
                id: LinkedinLoginProvider.PROVIDER_ID,
                provider: new LinkedinLoginProvider("813apbq03fngwd")
            },
        ]
    );
    return config;
}