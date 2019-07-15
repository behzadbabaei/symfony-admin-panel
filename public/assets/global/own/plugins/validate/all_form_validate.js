(function ($) {
    $(document).ready(function () {
        /*////////////////////////////////////////////////////////////////////////*/
        /* regex */
        $.validator.addMethod("regex", function (value, element, regexpr) {
            return regexpr.test(value);
        }, "Provide a valid regex");
        $.validator.addMethod("credit_card", function (credit_card) {
            return checkCartDigit(credit_card)
        }, "invalid credit card");
        $.validator.addMethod("legal_shenasemeli", function (legal_shenasemeli) {
            return checkNationalID(legal_shenasemeli)
        }, "invalid shenase meli");
        $.validator.addMethod("national_code", function (national_code) {
            return checkNationalCode(national_code)
        }, "invalid national code");


        /* /////////////////////////////////////////////////////////////////////////*/
        /* Article and News */
        $("#article_form").validate({
            errorClass: 'errorValidate',
            rules: {
                category: "required",
                title: "required",
                summary: "required",
                description: "required",
                source: "required",
                link: "required",
                pic: "required",
            },
            messages: {
                category: {
                    required: "الزامی"
                },
                title: {
                    required: "الزامی"
                },
                summary: {
                    required: "الزامی"
                },
                description: {
                    required: "الزامی"
                },
                source: {
                    required: "الزامی"
                },
                link: {
                    required: "الزامی"
                },
                pic: {
                    required: "الزامی"
                },
            }
        });
        /* Admin */
        $("#admin_form").validate({
            errorClass: 'errorValidate',
            rules: {
                name: "required",
                family: "required",
                email: "required",
                role: "required",
            },
            messages: {
                name: {
                    required: "الزامی"
                },
                family: {
                    required: "الزامی"
                },
                email: {
                    required: "الزامی"
                },
                role: {
                    required: "الزامی"
                },
            }
        });
        /* Role */
        $("#role_form").validate({
            errorClass: 'errorValidate',
            rules: {
                name: {
                    required: true,
                },
                description: {
                    required: true,
                    regex: /^[\u0600-\u06FF\s]+$/
                },
            },
            messages: {
                name: {
                    required: "الزامی",
                },
                description: {
                    required: "الزامی",
                    regex: "فقط کاراکتر فارسی"
                },

            }
        });
        /* User */
        $("#user_form").validate({
            errorClass: 'errorValidate',
            rules: {
                email: {

                    email: true
                },
                mobile: {
                    required: true,
                    /* regex: /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/ ,*/

                    regex: /^(0|\+98)?([ ]|,|-|[()]){0,2}9[0|1|2|3|4]([ ]|,|-|[()]){0,3}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/
                },
                /*Legal*/
                legal_name: {
                    required: true
                },

                legal_type: {
                    required: true
                },
                registration_place: {
                    required: true
                },
                registration_number: {
                    required: true
                },
                registration_date: {
                    required: true,

                    regex: /^[1][2-4][0-9]{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/
                },
                legal_shenasemeli: {
                    required: true,
                    legal_shenasemeli: true
                },

                description: {
                    required: true
                },

                /* Real */
                gender: {
                    required: true
                },
                marital_status: {
                    required: true
                },

                name: {
                    required: true,
                    regex: /^(?:[\u0600-\u06FF\s]+|)$/
                },
                family: {
                    required: true,
                    regex: /^(?:[\u0600-\u06FF\s]+|)$/
                },


                father: {
                    required: true,
                    regex: /^(?:[\u0600-\u06FF\s]+|)$/
                },

                name_en: {

                    regex: /^(?:[a-zA-Z]+|)$/
                },
                family_en: {

                    regex: /^(?:[a-zA-Z]+|)$/
                },


                father_en: {

                    regex: /^(?:[a-zA-Z]+|)$/
                },

                real_national_code: {
                    required: true,

                    national_code: true,


                    regex: /^[0-9]*$/

                },
                sh_sh: {
                    required: true
                },
                birthday: {
                    required: true,
                    regex: /^[1][2-4][0-9]{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/
                },
                issue_place: {
                    regex: /^(?:[\u0600-\u06FF\s]+|)$/
                },
                married_date: {
                    regex: /^(?:[1][2-4][0-9]{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])|)$/
                },

                /* Work */
                legal_id: {
                    required: true
                },
                organization_role_id: {
                    required: true
                },
                personal_code: {
                    required: true,
                    regex: /^[0-9]*$/
                },
                start_date: {
                    regex: /^(?:[1][2-4][0-9]{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])|)$/
                },


            },
            messages: {
                gender: {
                    required: "الزامی",
                },
                marital_status: {
                    required: "الزامی",
                },

                email: {

                    email: "ایمیل معتبر نیست",
                },
                mobile: {
                    required: "الزامی",
                    regex: "موبایل معتبر نیست",
                },

                /* Real */
                name: {
                    required: "الزامی",
                    regex: "فقط حروف فارسی وارد نمایید"
                },
                family: {
                    required: "الزامی",
                    regex: "فقط حروف فارسی وارد نمایید"
                },

                father: {
                    required: "الزامی",
                    regex: "فقط حروف فارسی وارد نمایید"
                },
                name_en: {

                    regex: "فقط حروف انگلیسی وارد نمایید"
                },
                family_en: {

                    regex: "فقط حروف انگلیسی وارد نمایید"
                },


                father_en: {

                    regex: "فقط حروف انگلیسی وارد نمایید"
                },
                real_national_code: {
                    required: "الزامی",
                    national_code: "کد ملی معتبر نیست"
                },
                sh_sh: {
                    required: "الزامی"
                },
                birthday: {
                    required: "الزامی",
                    regex: "تاریخ وارد شده صحیح نیست (فرمت صحیح: 1397/01/01)"
                },
                issue_place: {
                    regex: "فقط حروف فارسی وارد نمایید"
                },
                married_date: {
                    regex: "تاریخ وارد شده صحیح نیست (فرمت صحیح: 1397/01/01)"
                },
                /* workplace */
                legal_id: {
                    required: "الزامی"
                },
                organization_role_id: {
                    required: "الزامی"
                },
                personal_code: {
                    required: "الزامی",
                    regex: "فقط عدد وارد نمایید"
                },
                start_date: {
                    regex: "تاریخ وارد شده صحیح نیست (فرمت صحیح: 1397/01/01)"
                },


                /* legal */
                legal_name: {
                    required: "الزامی"
                },

                legal_type: {
                    required: "الزامی"
                },
                registration_place: {
                    required: "الزامی"
                },
                registration_number: {
                    required: "الزامی"
                },
                registration_date: {
                    required: "الزامی",
                    regex: "تاریخ وارد شده صحیح نیست (فرمت صحیح: 1397/01/01)"
                },
                legal_shenasemeli: {
                    required: "الزامی",
                    legal_shenasemelilegal_shenasemeli: "شناسه ملی معتبر نیست"
                },

                description: {
                    required: "الزامی"
                },


            }
        });
        /* User Address*/
        $("#user_address_form").validate({
            errorClass: 'errorValidate',
            rules: {
                title: {
                    required: true
                },

                /*Legal*/
                country_id: {
                    required: true
                },

                state_id: {
                    required: true
                },
                city_id: {
                    required: true
                },
                address: {
                    required: true
                },
                plaque: {
                    required: true,
                },
                /*
                postal_code: {
                    required: true,
                    number: true,
                    step: 10
                },
                */
                /*
                tel: {
                    required: true,
                    number: true
                },
                */

                latInput: {
                    required: true
                },
                longInput: {
                    required: true
                },


            },
            messages: {
                title: {
                    required: "الزامی",
                },
                email: {
                    required: "الزامی",
                    email: "ایمیل معتبر نیست",
                },
                mobile: {
                    required: "الزامی",
                    regex: "موبایل معتبر نیست",
                },
                country_id: {
                    required: "الزامی",
                },
                state_id: {
                    required: "الزامی",
                },
                city_id: {
                    required: "الزامی",
                },
                address: {
                    required: "الزامی",
                },
                plaque: {
                    required: "الزامی",
                },
                postal_code: {
                    required: "الزامی",
                    number: "اکدپستی معتبر نیست",
                    step: "کدپستی باید 10 رقم باشد",

                },
                tel: {
                    required: "الزامی",
                    number: "شماره تلفن معتبر نیست",
                },
                latInput: {
                    required: "الزامی",
                },
                longInput: {
                    required: "الزامی",
                },

            }
        });

        $("#user_accountNumber_form").validate({
            errorClass: 'errorValidate',
            rules: {

                mobile: {
                    required: true,
                    /* regex: /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/ ,*/

                    regex: /^(0|\+98)?([ ]|,|-|[()]){0,2}9[0|1|2|3|4]([ ]|,|-|[()]){0,3}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/
                },
                account_number: {
                    required: true,

                },
                card_number: {
                    credit_card: {
                        depends: function (element) {
                            return $("#card_number").is(":filled");
                        }
                    }

                    // regex:  /^[(]{0,1}[0-9]{4}[)]{0,1}[-\s\.]{0,1}[0-9]{4}[-\s\.]{0,1}[0-9]{4}$/
                },
                ibn_number: {
                    required: true,

                },

            },
            messages: {
                account_number: {
                    required: "الزامی",
                },
                card_number: {
                    required: "الزامی",
                    credit_card: "شماره کارت معتبر نیست",

                },
                mobile: {
                    required: "الزامی",
                    regex: "موبایل معتبر نیست",
                },
                ibn_number: {
                    required: "الزامی",
                    step: "حاکثر فلان کاراکتر"
                },

            }
        });
    });
})(jQuery);
