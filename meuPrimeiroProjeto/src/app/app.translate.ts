import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { importProvidersFrom } from "@angular/core";

const httpLoaderFactory = (http: HttpClient) => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json')   
}

const translateModuleConfig: TranslateModuleConfig = {
    defaultLanguage: 'pt-br',
    loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
    },
};

export const provideTranslate = () => {
    return importProvidersFrom(TranslateModule.forRoot(translateModuleConfig))
}
