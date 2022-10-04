/* eslint-disable */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";




const resources = {
    en: {
        translation: {
            "todo": "Todo List",
            "add": "Add",
            "done": "Done",
            "notDone": "Not Done",
            "remove": "Remove",
            "prev": "Previous",
            "next": "Next",
        }
    },
    vn: {
        translation: {
            "todo": "Danh sách công việc",
            "add": "Thêm",
            "done": "Xong",
            "notDone": "Chưa xong",
            "remove": "Xoá",
            "prev": "Trang trước",
            "next": "Trang sau",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;