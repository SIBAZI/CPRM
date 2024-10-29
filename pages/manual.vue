<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      poaRegisteredSealModal: false, //委任状（実印）モーダル
      poaStampingModal: false, //委任状（認印）モーダル
      ossRegisteredSealModal: false, //OSS（実印）モーダル
      ossStampingModal: false, //OSS委任状(認印)モーダル
      lightCarDocumentsOwnerAndUserModal: false, //申請依頼書(所有者・使用者）モーダル
      lightCarDocumentsUserModal: false, //申請依頼書(使用者）モーダル
      NCgarageVerificationModal: false, //保管場所証明申請書モーダル
      selfCertification: false, //自認書モーダル
      ConsentToUseModal: false, //使用承諾証モーダル
      arrangementDiagramNameModal: false, //配置図モーダル
      desiredNumberModal: false, //希望番号伺書モーダル
      etcModal: false, //ETC申込用紙モーダル
      etc2Modal: false, //ETC2.0申込用紙モーダル
      newCarExtendedWarrantyModal: false, //新車延長保証モーダル
      usedCarExtendedWarrantyModal: false, //中古車延長保証モーダル
      maintenancePackModal: false, //メンテナンスパック申込用紙記入例
      taxDeclarationNameModal: false, //税申告書記入例

      start: {
        startKubun: "", //成約時登録・買取・下取り・一般登録代行
      },
      contracts: {
        userCode: "", //ユーザーコード
        orderDate: "", //受注日
        carModel: "", //成約車種
        storeKubun: "", //店舗区分
        managerName: "", //担当者名
        newCarUsedCarKubun: "", //新車・中古区分
        normalCarLightCarKubun: "", //普通車・軽自動車区分
        paymentKubun: "", //支払区分
        //tradeInCarKubun: "", //下取車有・買取有・下取買取無区分
        insuranceKubun: "", //（保険）当社加入・他社加入
      },
      normalCarDocuments: {
        poaKubun: "委任状", //委任状
        poaOssKubun: "", //委任状・OSS
        isFillIn: "", //ご記入
        isRegisteredSeal: false, //実印（銀行印）
        isSealCertificate: false, //印鑑証明
        isStamping: false, //認印
        isResidentCard: false, //住民票
        completedDate: false, //完了日
      },
      lightCarDocuments: {
        lightCarDocumentsKubun: "申請依頼書", //申請依頼書
        isFillIn: "", //ご記入
        isStamping: false, //認印
        isResidentCard: false, //住民票
        completedDate: false, //完了日
      },
      normalCarDocumentsGarageVerification: {
        NCgarageVerificationKubun: "", //（車庫証明）保管場所証明申請書区分
        isFillIn: "", //ご記入
        completedDate: false, //完了日
      },
      lightCarDocumentsGarageVerification: {
        LCgarageVerificationKubun: "", //（車庫証明）保管場所届出書・代行不要区分
        isFillIn: "", //ご記入
        completedDate: false, //完了日
      },
      storingMethod: {
        selfCertificationConsentToUseKubun: "", //自認書・使用承諾証証明書区分
        isFillIn: "", //ご記入
        completedDate: false, //完了日
      },
      arrangementDiagram: {
        arrangementDiagramName: "配置図", //配置図
        isFillIn: "", //ご記入
        completedDate: false, //完了日
      },
      desiredNumber: {
        isDesiredNumber: "", //（希望番号）有・無区分
        isFillIn: "", //ご記入
        completedDate: false, //完了日
      },
      etc: {
        etcKubun: "", //（ETC）有・無区分
        isFillIn: "", //ご記入
        completedDate: false, //完了日
      },
      extendedWarranty: {
        isExtendedWarranty: "", //（延長保証）有・無区分
        isFillIn: "", //ご記入
        completedDate: false, //完了日
      },
      maintenancePack: {
        isMaintenancePack: "", //（メンテナンスパック）有・無区分
        isFillIn: "", //ご記入
        completedDate: false, //完了日
      },
      jaf: {
        isJafPaymentKubun: "", //（JAF）有（口座振替）・有（クレジット）・無区分
        isFillIn: "", //ご記入
        isBankSeal: false, //銀行印
        completedDate: false, //完了日
      },
      taxDeclaration: {
        taxDeclarationName: "税申告書", //税申告書
        isFillIn: "", //ご記入
        completedDate: false, //完了日
      },
      credit: {
        creditDocuments: "", //クレジット書類
        isFillIn: "", //ご記入
        isRegisteredSeal: false, //実印（銀行印）
        completedDate: false, //完了日
      },

      insurance: {
        jocInsuranceCompany: "", //当社加入保険会社
        jacInsuranceCompany: "", //他社加入保険会社
        joiningProcedure: "", //手続き
        confirmationOfMembership: "", //加入確認
        skyPlus: "スカイプラス", //スカイプラス
        skyPlusExplanation: "", //スカイプラス説明
        completedDate: false, //完了日
      },

      delivery: {
        deliveryDate: "", //納車予定日
      },

      tradeInCarContent: {
        carModel: "", //下取車種
        normalCarLightCarKubun: "", //普通車・軽自動車区分
        nameChangeDeletionKubun: "", //名変・抹消区分
        ownershipKubun: "", //所有権区分
        vehicleNumber: "", //車体番号
      },

      tradeInCarAndOtherConfirma: {
        isDeathOfPerson: "", //本人死亡ステータス
        isAddressNotConnected: "", //住所繋がらないステータス
        isOwnerMinor: "", //所有者未成年ステータス
        isRecycling10000yenOfMore: "", //リサイクル預託金1万円以上ステータス
      },

      memos: [
        {
          recordDate: "", //記念日
          memoField: "", //メモ
          promisedDay: "", //約束日
        },
      ],
    };
  },
  methods: {
    //     button() {
    //       console.log(this.carDivision);
    //       const result = useFetch("/api/users", {
    //         method: "post",
    //         body: {
    //           userCode: this.text,
    //         },
    //       });
    //       console.log(result);
    //     },
    // CreditDocumentsCompleted() {
    //   if (
    //     this.contracts.paymentKubun === "クレジット" &&
    //     this.credit.isFillIn &&
    //     this.credit.isRegisteredSeal
    //   ) {
    //     this.credit.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.credit.completedDate = "";
    //   }
    // },

    // poaOssKubunCompleted() {
    //   if (
    //     (this.normalCarDocuments.isFillIn &&
    //       this.normalCarDocuments.isRegisteredSeal &&
    //       this.normalCarDocuments.isSealCertificate) ||
    //     (this.normalCarDocuments.isFillIn &&
    //       this.normalCarDocuments.isStamping &&
    //       this.normalCarDocuments.isResidentCard)
    //   ) {
    //     this.normalCarDocuments.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.normalCarDocuments.completedDate = "";
    //   }
    // },

    // lightCarDocumentsKubunCompleted() {
    //   if (
    //     this.lightCarDocuments.isFillIn &&
    //     this.lightCarDocuments.isStamping &&
    //     this.lightCarDocuments.isResidentCard
    //   ) {
    //     this.lightCarDocuments.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.lightCarDocuments.completedDate = "";
    //   }
    // },

    // NCgarageVerificationKubunCompleted() {
    //   if (this.normalCarDocumentsGarageVerification.isFillIn) {
    //     this.normalCarDocumentsGarageVerification.completedDate =
    //       dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.normalCarDocumentsGarageVerification.completedDate = "";
    //   }
    // },

    // LCgarageVerificationKubunCompleted() {
    //   if (this.lightCarDocumentsGarageVerification.isFillIn) {
    //     this.lightCarDocumentsGarageVerification.completedDate =
    //       dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.lightCarDocumentsGarageVerification.completedDate = "";
    //   }
    // },

    // selfCertificationConsentToUseKubunCompleted() {
    //   if (this.storingMethod.isFillIn) {
    //     this.storingMethod.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.storingMethod.completedDate = "";
    //   }
    // },

    // arrangementDiagramCompleted() {
    //   if (this.arrangementDiagram.isFillIn) {
    //     this.arrangementDiagram.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.arrangementDiagram.completedDate = "";
    //   }
    // },

    // isDesiredNumberCompleted() {
    //   if (this.desiredNumber.isFillIn) {
    //     this.desiredNumber.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.desiredNumber.completedDate = "";
    //   }
    // },

    // etcKubunCompleted() {
    //   if (this.etc.isFillIn) {
    //     this.etc.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.etc.completedDate = "";
    //   }
    // },

    // isExtendedWarrantyCompleted() {
    //   if (this.extendedWarranty.isFillIn) {
    //     this.extendedWarranty.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.extendedWarranty.completedDate = "";
    //   }
    // },

    // isMaintenancePackCompleted() {
    //   if (this.maintenancePack.isFillIn) {
    //     this.maintenancePack.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.maintenancePack.completedDate = "";
    //   }
    // },

    // isJafPaymentKubunCompleted() {
    //   if (
    //     (this.jaf.isFillIn && this.jaf.isBankSeal) ||
    //     (this.jaf.isJafPaymentKubun === "有（クレジット）" && this.jaf.isFillIn)
    //   ) {
    //     this.jaf.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.jaf.completedDate = "";
    //   }
    // },

    // taxDeclarationCompleted() {
    //   if (this.taxDeclaration.isFillIn) {
    //     this.taxDeclaration.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.taxDeclaration.completedDate = "";
    //   }
    // },

    // insuranceCompleted() {
    //   if (this.insurance.joiningProcedure) {
    //     this.insurance.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.insurance.completedDate = "";
    //   }
    // },

    // insuranceCompleted2() {
    //   if (this.insurance.confirmationOfMembership) {
    //     this.insurance.completedDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     this.insurance.completedDate = "";
    //   }
    // },

    // onSave() {
    //   let params = new URLSearchParams();
    //   for (const table in this.$data) {
    //     for (const key in this.$data[table]) {
    //       console.log(`${table}[${key}]`, this.$data[table][key]);
    //       params.append(`${table}[${key}]`, this.$data[table][key]);
    //     }
    //   }
    //   console.log(params.toString());
    //   params.forEach((value, key) => console.log(key, ":", value));

    //   console.log(this.$data);
    //   const result = useFetch("/api/contract", {
    //     method: "post",
    //     body: this.$data,
    //   });
    //   console.log(result);
    // },

    // memoField(memo) {
    //   if (memo.memoField) {
    //     memo.recordDate = dayjs().format("YYYY-MM-DD");
    //   } else {
    //     memo.recordDate = "";
    //   }
    // },

    // addMemo() {
    //   this.memos.push({
    //     recordDate: "",
    //     memoField: "",
    //     promisedDay: "",
    //   });
    // },
    poaImg() {
      window.open("/委任状（書類代行）.pdf", "_blank");
    },
    ossImg() {
      window.open("/委任状（OSS兼用）.pdf", "_blank");
    },
    lightCarDocumentsImg() {
      window.open("/申請依頼書（軽自動車）.pdf", "_blank");
    },
    arrangementDiagramNameImg() {
      window.open("/配置図.pdf", "_blank");
    },
    selfCertificationImg() {
      window.open("/自認書.pdf", "_blank");
    },
    consentToUseImg() {
      window.open("/使用承諾証.pdf", "_blank");
    },
    desiredNumberImg() {
      window.open("/希望番号伺書.pdf", "_blank");
    },
    removeMemo(index) {
      this.memos.splice(index, 1);
    },
    rattocClear() {
      this.contracts.newCarUsedCarKubun = "";
      this.contracts.normalCarLightCarKubun = "";
      this.contracts.paymentKubun = "";
      this.contracts.insuranceKubun = "";
      this.normalCarDocuments.poaOssKubun = "";
      this.normalCarDocuments.isFillIn = false;
      this.normalCarDocuments.isRegisteredSeal = false;
      this.normalCarDocuments.isStamping = false;
      this.normalCarDocuments.isSealCertificate = false;
      this.normalCarDocuments.isResidentCard = false;
      this.normalCarDocuments.completedDate = false;
      this.normalCarDocumentsGarageVerification.NCgarageVerificationKubun = "";
      this.normalCarDocumentsGarageVerification.isFillIn = false;
      this.normalCarDocumentsGarageVerification.completedDate = false;
      this.storingMethod.selfCertificationConsentToUseKubun = "";
      this.storingMethod.isFillIn = "";
      this.storingMethod.completedDate = false;
      this.arrangementDiagram.isFillIn = "";
      this.arrangementDiagram.completedDate = false;
      this.desiredNumber.isDesiredNumber = "";
      this.desiredNumber.isFillIn = "";
      this.desiredNumber.completedDate = false;
      this.etc.etcKubun = "";
      this.etc.isFillIn = "";
      this.etc.completedDate = false;
      this.extendedWarranty.isExtendedWarranty = "";
      this.extendedWarranty.isFillIn = "";
      this.extendedWarranty.completedDate = false;
      this.maintenancePack.isMaintenancePack = "";
      this.maintenancePack.isFillIn = "";
      this.maintenancePack.completedDate = false;
      this.jaf.isJafPaymentKubun = "";
      this.jaf.isFillIn = "";
      this.jaf.isBankSeal = false;
      this.jaf.completedDate = false;
      this.insurance.jocInsuranceCompany = "";
      this.insurance.jacInsuranceCompany = "";
      this.insurance.joiningProcedure = "";
      this.insurance.confirmationOfMembership = "";
      this.insurance.completedDate = false;
      this.lightCarDocuments.isFillIn = "";
      this.lightCarDocuments.isStamping = false;
      this.lightCarDocuments.isResidentCard = false;
      this.lightCarDocuments.completedDate = false;
      this.lightCarDocumentsGarageVerification.LCgarageVerificationKubun = "";
      this.lightCarDocumentsGarageVerification.isFillIn = "";
      this.lightCarDocumentsGarageVerification.completedDate = false;
      this.taxDeclaration.isFillIn = "";
      this.taxDeclaration.completedDate = false;
      this.credit.creditDocuments = "";
    },
    newCarUsedCarKubunChange() {
      this.normalCarDocuments.poaOssKubun = "";
      this.normalCarDocuments.isFillIn = false;
      this.normalCarDocuments.isRegisteredSeal = false;
      this.normalCarDocuments.isStamping = false;
      this.normalCarDocuments.isSealCertificate = false;
      this.normalCarDocuments.isResidentCard = false;
      this.normalCarDocuments.completedDate = false;
      this.normalCarDocumentsGarageVerification.NCgarageVerificationKubun = "";
      this.normalCarDocumentsGarageVerification.isFillIn = false;
      this.normalCarDocumentsGarageVerification.completedDate = false;
      this.storingMethod.selfCertificationConsentToUseKubun = "";
      this.storingMethod.isFillIn = "";
      this.storingMethod.completedDate = false;
      this.arrangementDiagram.isFillIn = "";
      this.arrangementDiagram.completedDate = false;
      this.desiredNumber.isDesiredNumber = "";
      this.desiredNumber.isFillIn = "";
      this.desiredNumber.completedDate = false;
      this.etc.etcKubun = "";
      this.etc.isFillIn = "";
      this.etc.completedDate = false;
      this.extendedWarranty.isExtendedWarranty = "";
      this.extendedWarranty.isFillIn = "";
      this.extendedWarranty.completedDate = false;
      this.maintenancePack.isMaintenancePack = "";
      this.maintenancePack.isFillIn = "";
      this.maintenancePack.completedDate = false;
      this.jaf.isJafPaymentKubun = "";
      this.jaf.isFillIn = "";
      this.jaf.isBankSeal = false;
      this.jaf.completedDate = false;
      this.insurance.jocInsuranceCompany = "";
      this.insurance.jacInsuranceCompany = "";
      this.insurance.joiningProcedure = "";
      this.insurance.confirmationOfMembership = "";
      this.insurance.completedDate = false;
      this.lightCarDocuments.isFillIn = "";
      this.lightCarDocuments.isStamping = false;
      this.lightCarDocuments.isResidentCard = false;
      this.lightCarDocuments.completedDate = false;
      this.lightCarDocumentsGarageVerification.LCgarageVerificationKubun = "";
      this.lightCarDocumentsGarageVerification.isFillIn = "";
      this.lightCarDocumentsGarageVerification.completedDate = false;
      this.taxDeclaration.isFillIn = "";
      this.taxDeclaration.completedDate = false;
    },
    normalCarLightCarKubunChange() {
      this.normalCarDocuments.poaOssKubun = "";
      this.normalCarDocuments.isFillIn = false;
      this.normalCarDocuments.isRegisteredSeal = false;
      this.normalCarDocuments.isStamping = false;
      this.normalCarDocuments.isSealCertificate = false;
      this.normalCarDocuments.isResidentCard = false;
      this.normalCarDocuments.completedDate = false;
      this.normalCarDocumentsGarageVerification.NCgarageVerificationKubun = "";
      this.normalCarDocumentsGarageVerification.isFillIn = false;
      this.normalCarDocumentsGarageVerification.completedDate = false;
      this.storingMethod.selfCertificationConsentToUseKubun = "";
      this.storingMethod.isFillIn = "";
      this.storingMethod.completedDate = false;
      this.arrangementDiagram.isFillIn = "";
      this.arrangementDiagram.completedDate = false;
      this.desiredNumber.isDesiredNumber = "";
      this.desiredNumber.isFillIn = "";
      this.desiredNumber.completedDate = false;
      this.etc.etcKubun = "";
      this.etc.isFillIn = "";
      this.etc.completedDate = false;
      this.extendedWarranty.isExtendedWarranty = "";
      this.extendedWarranty.isFillIn = "";
      this.extendedWarranty.completedDate = false;
      this.maintenancePack.isMaintenancePack = "";
      this.maintenancePack.isFillIn = "";
      this.maintenancePack.completedDate = false;
      this.jaf.isJafPaymentKubun = "";
      this.jaf.isFillIn = "";
      this.jaf.isBankSeal = false;
      this.jaf.completedDate = false;
      this.insurance.jocInsuranceCompany = "";
      this.insurance.jacInsuranceCompany = "";
      this.insurance.joiningProcedure = "";
      this.insurance.confirmationOfMembership = "";
      this.insurance.completedDate = false;
      this.lightCarDocuments.isFillIn = "";
      this.lightCarDocuments.isStamping = false;
      this.lightCarDocuments.isResidentCard = false;
      this.lightCarDocuments.completedDate = false;
      this.lightCarDocumentsGarageVerification.LCgarageVerificationKubun = "";
      this.lightCarDocumentsGarageVerification.isFillIn = "";
      this.lightCarDocumentsGarageVerification.completedDate = false;
      this.taxDeclaration.isFillIn = "";
      this.taxDeclaration.completedDate = false;
      this.normalCarDocuments.isRegisteredSeal = false;
    },

    paymentKubunChange() {
      this.credit.isFillIn = "";
      this.credit.isRegisteredSeal = false;
      this.credit.completedDate = false;
      this.credit.creditDocuments = "";
      this.credit.isFillIn = "";
      this.credit.isRegisteredSeal = false;
      this.credit.completedDate = false;
      this.normalCarDocuments.isRegisteredSeal = false;
      this.normalCarDocuments.isStamping = false;
      this.normalCarDocuments.isSealCertificate = false;
      this.normalCarDocuments.isResidentCard = false;
      this.normalCarDocuments.isFillIn = false;
      this.normalCarDocuments.isRegisteredSeal = false;
      this.normalCarDocuments.isStamping = false;
      this.normalCarDocuments.isSealCertificate = false;
      this.normalCarDocuments.isResidentCard = false;
      this.lightCarDocuments.isFillIn = false;
      this.lightCarDocuments.isStamping = false;
      this.lightCarDocuments.isResidentCard = false;
    },
    insuranceKubunChange() {
      this.insurance.jocInsuranceCompany = "";
      this.insurance.jacInsuranceCompany = "";
      this.insurance.joiningProcedure = "";
      this.insurance.confirmationOfMembership = "";
      this.insurance.completedDate = false;
    },
    poaOssKubunChange() {
      this.normalCarDocuments.poaOssKubun = "";
      this.normalCarDocuments.isFillIn = "";
      this.normalCarDocuments.isRegisteredSeal = false;
      this.normalCarDocuments.isSealCertificate = false;
      this.normalCarDocuments.isStamping = false;
      this.normalCarDocuments.isResidentCard = false;
      this.normalCarDocuments.completedDate = false;
      this.normalCarDocumentsGarageVerification.NCgarageVerificationKubun = "";
      this.normalCarDocumentsGarageVerification.isFillIn = "";
      this.normalCarDocumentsGarageVerification.completedDate = false;
      this.storingMethod.selfCertificationConsentToUseKubun = "";
      this.storingMethod.isFillIn = "";
      this.storingMethod.completedDate = false;
      this.arrangementDiagram.isFillIn = "";
      this.arrangementDiagram.completedDate = false;
    },
    lightCarDocumentsKubunChange() {
      this.lightCarDocuments.isFillIn = "";
      this.lightCarDocuments.isStamping = false;
      this.lightCarDocuments.isResidentCard = false;
      this.lightCarDocuments.completedDate = false;
      this.lightCarDocumentsGarageVerification.LCgarageVerificationKubun = "";
      this.lightCarDocumentsGarageVerification.isFillIn = "";
      this.lightCarDocumentsGarageVerification.completedDate = false;
      this.storingMethod.selfCertificationConsentToUseKubun = "";
      this.storingMethod.isFillIn = "";
      this.storingMethod.completedDate = false;
      this.arrangementDiagram.isFillIn = "";
      this.arrangementDiagram.completedDate = false;
    },
    NCgarageVerificationKubunChange() {
      this.normalCarDocumentsGarageVerification.NCgarageVerificationKubun = "";
      this.normalCarDocumentsGarageVerification.isFillIn = "";
      this.normalCarDocumentsGarageVerification.completedDate = false;
      this.storingMethod.selfCertificationConsentToUseKubun = "";
      this.storingMethod.isFillIn = "";
      this.storingMethod.completedDate = false;
      this.arrangementDiagram.isFillIn = "";
      this.arrangementDiagram.completedDate = false;
    },
    LCgarageVerificationKubunChange() {
      this.lightCarDocumentsGarageVerification.LCgarageVerificationKubun = "";
      this.lightCarDocumentsGarageVerification.isFillIn = "";
      this.lightCarDocumentsGarageVerification.completedDate = false;
      this.storingMethod.selfCertificationConsentToUseKubun = "";
      this.storingMethod.isFillIn = "";
      this.storingMethod.completedDate = false;
      this.arrangementDiagram.isFillIn = "";
      this.arrangementDiagram.completedDate = false;
    },
    selfCertificationConsentToUseKubunChange() {
      this.storingMethod.selfCertificationConsentToUseKubun = "";
      this.storingMethod.isFillIn = "";
      this.storingMethod.completedDate = false;
    },
    isDesiredNumberChange() {
      this.desiredNumber.isDesiredNumber = "";
      this.desiredNumber.isFillIn = "";
      this.desiredNumber.completedDate = false;
    },
    etcKubunChange() {
      this.etc.etcKubun = "";
      this.etc.isFillIn = "";
      this.etc.completedDate = false;
    },
    isExtendedWarrantyChange() {
      this.extendedWarranty.isExtendedWarranty = "";
      this.extendedWarranty.isFillIn = "";
      this.extendedWarranty.completedDate = false;
    },
    isMaintenancePackChange() {
      this.maintenancePack.isMaintenancePack = "";
      this.maintenancePack.isFillIn = "";
      this.maintenancePack.completedDate = false;
    },
    isJafPaymentKubunChange() {
      this.jaf.isJafPaymentKubun = "";
      this.jaf.isFillIn = "";
      this.jaf.isBankSeal = false;
      this.jaf.completedDate = false;
    },
    isCreditChange() {
      this.credit.creditDocuments = "";
      this.credit.isFillIn = "";
      this.credit.isRegisteredSeal = false;
      this.credit.completedDate = false;
    },
    isJocInsuranceCompanyChange() {
      this.insurance.joiningProcedure = false;
      this.insurance.skyPlusExplanation = false;
    },

    // console.log(this.contracts.normalCarLightCarKubun);
    // console.log(this.normalCarDocuments);
    // console.log(event);
  },
};
</script>

<template>
  <div class="body">
    <v-app>
      <!-- <v-app-bar class="h-5" color="grey-lighten-2">
        <v-app-bar-title> 　　　ユーザー登録画面 </v-app-bar-title>
        <v-col cols="1" class="mx-10">
          <v-btn
            @click="onSave"
            size="large"
            variant="outlined"
            class="on-save"
          >
            保存
          </v-btn>
        </v-col>
      </v-app-bar> -->
      <!-- <v-row class="input-list">
        <v-col cols="2" class="ml-15 orderDate">
          <v-text-field
            :class="{
              'completedDate-input': contracts.orderDate != false,
            }"
            v-model="contracts.orderDate"
            type="date"
            label="受注日(必須)"
          ></v-text-field>
        </v-col>

        <v-col cols="2" class="mx-1 userCode">
          <v-combobox
            :class="{
              'completedDate-input': contracts.userCode != false,
            }"
            v-model="contracts.userCode"
            label="ユーザーID（必須）"
            :items="[]"
            variant="outlined"
            type="number"
          ></v-combobox>
        </v-col>

        <v-col cols="2" class="mx-1">
          <v-combobox
            v-model="contracts.carModel"
            label="成約車種"
            :items="[]"
            variant="outlined"
          ></v-combobox>
        </v-col>

        <v-col cols="2" class="mx-1">
          <v-select
            v-model="contracts.storeKubun"
            label="店舗"
            :items="['', 'A店', 'B店']"
            variant="outlined"
          ></v-select>
        </v-col>

        <v-col cols="2" class="mx-1">
          <v-combobox
            v-model="contracts.managerName"
            label="担当者名"
            :items="[]"
            variant="outlined"
          ></v-combobox>
        </v-col>
      </v-row> -->
      <div>
        <v-row class="mt-15 ml-8" v-if="this.start.startKubun === ''">
          <v-col>
            <img class="logo" src="/アンフィニ広島手続きマニュアルロゴ.jpg" />
          </v-col>
        </v-row>
        <v-row v-if="this.start.startKubun === ''">
          <p class="ml-16">
            　※お客様との接客を第一に考えられるようにするためのサポートマニュアルです。<br />
            　　マニュアルに頼りきらず自身で手続きを覚えるつもりで<br />
            　　スキルアップの補助として活用しましょう。<br />
            　　全体像の把握、分からないことを明確化することが大切です。<br />
            　　接客はマニュアルでは収まりません。<br />
            　　自分の思い、言葉で説明できるように心がけましょう。<br />
            　　最後に、お客様だけではなく周りの人も大切に。
          </p>
        </v-row>
        <v-row class="mt-12 ml-12">
          <v-col cols="3" class="">
            <v-select
              v-model="start.startKubun"
              label="手続き内容"
              :items="[
                '',
                '成約時登録',
                '買取・下取り',
                '納車準備',
                '納車',
                '一般登録代行',
              ]"
              variant="outlined"
            ></v-select>
          </v-col>
        </v-row>
        <v-row v-if="this.start.startKubun === '買取・下取り'">
          <p class="ml-16">　※現在作成中</p>
        </v-row>
        <v-row v-if="this.start.startKubun === '納車準備'">
          <p class="ml-16">　※現在作成中</p>
        </v-row>
        <v-row v-if="this.start.startKubun === '納車'">
          <p class="ml-16">　※現在作成中</p>
        </v-row>
        <v-row v-if="this.start.startKubun === '一般登録代行'">
          <p class="ml-16">　※現在作成中</p>
        </v-row>
      </div>
      <div v-if="this.start.startKubun === '成約時登録'">
        <v-row>
          <v-toolbar-title class="mt-5 ml-15 d-flex align-center start">
            　〇この度はご成約頂きありがとうございます。ここからはご成約頂いたお車の登録手続きになります。
          </v-toolbar-title>
        </v-row>
        <v-row>
          <p class="mt-5 ml-16">　ご成約頂いたお車は、</p>
        </v-row>

        <v-row class="ml-12 mt-10">
          <v-col cols="2" class="">
            <v-select
              @update:modelValue="newCarUsedCarKubunChange"
              v-model="contracts.newCarUsedCarKubun"
              label="新車or中古車"
              :items="['', '新車', '中古車']"
              variant="outlined"
            ></v-select>
          </v-col>

          <v-col cols="2" class="">
            <v-select
              @update:modelValue="normalCarLightCarKubunChange"
              v-model="contracts.normalCarLightCarKubun"
              label="普通車or軽自動車"
              :items="['', '普通車', '軽自動車']"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="2" class="">
            <v-select
              @update:modelValue="paymentKubunChange"
              v-model="contracts.paymentKubun"
              label="支払方法"
              :items="['', '現金', 'クレジット', '銀行ローン', '所有権留保']"
              variant="outlined"
            ></v-select>
          </v-col>

          <!-- <v-col cols="2" class="mx-1">
          <v-select
            v-model="contracts.tradeInCarKubun"
            label="下取車・買取車"
            :items="['', '下取車有', '買取車有', '無']"
            variant="outlined"
          ></v-select>
        </v-col> -->

          <v-col cols="2" class="">
            <v-select
              @update:modelValue="insuranceKubunChange"
              v-model="contracts.insuranceKubun"
              label="保険加入希望先"
              :items="['', '当社加入', '他社加入', '未加入']"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="2" class="mt-2 ml-16">
            <v-btn @click="rattocClear"> clear </v-btn>
          </v-col>
        </v-row>

        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '中古車' &&
            this.contracts.normalCarLightCarKubun === '普通車'
          "
        >
          <v-toolbar-title class="ml-15 d-flex align-center normalCarDocuments">
            　➀委任状（ご成約頂いたお車の登録、検査手続きを代行させて頂く手続きです。）
          </v-toolbar-title>
        </v-row>
        <v-row
          class="mt-10"
          v-if="
            this.contracts.newCarUsedCarKubun === '中古車' &&
            this.contracts.normalCarLightCarKubun === '普通車'
          "
        >
          <v-col cols="2" class="ml-15">
            <v-combobox
              v-model="normalCarDocuments.poaKubun"
              label=""
              :items="[]"
              variant="outlined"
              readonly
            ></v-combobox>
          </v-col>

          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="this.normalCarDocuments.poaKubun === '委任状'"
          >
            <v-checkbox v-model="normalCarDocuments.isFillIn" label="ご記入">
            </v-checkbox>
          </v-col>
          <v-col cols="2" class="mx-1 d-flex align-center">
            <v-checkbox
              v-if="
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === '銀行ローン') &&
                this.normalCarDocuments.poaKubun === '委任状'
              "
              v-model="normalCarDocuments.isRegisteredSeal"
              label="実印"
            >
            </v-checkbox>

            <v-checkbox
              v-if="
                (this.contracts.paymentKubun === 'クレジット' ||
                  this.contracts.paymentKubun === '所有権留保') &&
                this.normalCarDocuments.poaKubun === '委任状'
              "
              v-model="normalCarDocuments.isStamping"
              label="認印"
            >
            </v-checkbox>
          </v-col>

          <v-col cols="2" class="mx-1 d-flex align-center">
            <v-checkbox
              v-if="
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === '銀行ローン') &&
                this.normalCarDocuments.poaKubun === '委任状'
              "
              v-model="normalCarDocuments.isSealCertificate"
              label="印鑑証明"
            >
            </v-checkbox>

            <v-checkbox
              v-if="
                (this.contracts.paymentKubun === 'クレジット' ||
                  this.contracts.paymentKubun === '所有権留保') &&
                this.normalCarDocuments.poaKubun === '委任状'
              "
              v-model="normalCarDocuments.isResidentCard"
              label="住民票"
            >
            </v-checkbox>
          </v-col>

          <v-col
            v-if="
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン' ||
                this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保') &&
              this.normalCarDocuments.poaKubun === '委任状'
            "
            cols="2"
            class="mb-6 d-flex align-center"
          >
            <div
              class="complete"
              :class="{
                'is-fill-in-completed':
                  (this.normalCarDocuments.isFillIn &&
                    this.normalCarDocuments.isRegisteredSeal &&
                    this.normalCarDocuments.isSealCertificate) ||
                  (this.normalCarDocuments.isFillIn &&
                    this.normalCarDocuments.isStamping &&
                    this.normalCarDocuments.isResidentCard),
              }"
            >
              完了
            </div>
          </v-col>

          <!-- <v-col
          cols="2"
          class="mx-1 normalCarDocuments-completedDate"
          v-if="this.normalCarDocuments.poaOssKubun === '委任状'"
        >
          <v-text-field
            :class="{
              'completedDate-input': normalCarDocuments.completedDate != false,
            }"
            type="date"
            v-model="normalCarDocuments.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '中古車' &&
            this.contracts.normalCarLightCarKubun === '普通車' &&
            this.contracts.paymentKubun === '現金' &&
            this.normalCarDocuments.poaKubun === '委任状'
          "
        >
          <p class="explanation ml-16">
            ・現金でのお支払いの場合、お車の所有者はお客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。
          </p>
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '中古車' &&
            this.contracts.normalCarLightCarKubun === '普通車' &&
            this.contracts.paymentKubun === 'クレジット' &&
            this.normalCarDocuments.poaKubun === '委任状'
          "
        >
          <p class="explanation ml-16">
            ・クレジットでのお支払いの場合、<b>認印</b>と<b>住民票</b>が必要となります。
          </p>
        </v-row>

        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '中古車' &&
            this.contracts.normalCarLightCarKubun === '普通車' &&
            this.contracts.paymentKubun === '銀行ローン' &&
            this.normalCarDocuments.poaKubun === '委任状'
          "
        >
          <p class="explanation ml-16">
            ・銀行ローンでのお支払いの場合、お車の所有者はお客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。
          </p>
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '中古車' &&
            this.contracts.normalCarLightCarKubun === '普通車' &&
            this.contracts.paymentKubun === '所有権留保' &&
            this.normalCarDocuments.poaKubun === '委任状'
          "
        >
          <p class="explanation ml-16">
            ・所有権留保の場合、<b>認印</b>と<b>住民票</b>が必要となります。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.contracts.newCarUsedCarKubun === '中古車' &&
              this.contracts.normalCarLightCarKubun === '普通車' &&
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン') &&
              this.normalCarDocuments.poaKubun === '委任状'
            "
          >
            <v-btn
              @click="poaRegisteredSealModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="ml-16 d-flex align-center"
            v-if="
              this.contracts.newCarUsedCarKubun === '中古車' &&
              this.contracts.normalCarLightCarKubun === '普通車' &&
              (this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保') &&
              this.normalCarDocuments.poaKubun === '委任状'
            "
          >
            <v-btn
              @click="poaStampingModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              this.contracts.newCarUsedCarKubun === '中古車' &&
              this.contracts.normalCarLightCarKubun === '普通車' &&
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン') &&
              this.normalCarDocuments.poaKubun === '委任状'
            "
          >
            <v-btn @click="poaImg" density="compact" icon="mdi-printer"></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="d-flex align-center"
            v-if="
              this.contracts.newCarUsedCarKubun === '中古車' &&
              this.contracts.normalCarLightCarKubun === '普通車' &&
              (this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保') &&
              this.normalCarDocuments.poaKubun === '委任状'
            "
          >
            <v-btn @click="poaImg" density="compact" icon="mdi-printer"></v-btn>
          </v-col>
        </v-row>

        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.contracts.normalCarLightCarKubun === '普通車'
          "
        >
          <v-toolbar-title class="ml-15 d-flex align-center normalCarDocuments">
            　➀
            委任状・OSS（ご成約頂いたお車の登録、検査手続きを代行させて頂く手続きです。）
          </v-toolbar-title>
        </v-row>
        <v-row
          class="mt-10"
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.contracts.normalCarLightCarKubun === '普通車'
          "
        >
          <v-col cols="2" class="ml-15">
            <v-select
              @update:modelValue="poaOssKubunChange"
              v-model="normalCarDocuments.poaOssKubun"
              label="委任状 or OSS委任状"
              :items="['', '委任状', 'OSS委任状']"
              variant="outlined"
            ></v-select>
          </v-col>

          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="
              this.normalCarDocuments.poaOssKubun === '委任状' ||
              this.normalCarDocuments.poaOssKubun === 'OSS委任状'
            "
          >
            <v-checkbox
              @change="poaOssKubunCompleted"
              v-model="normalCarDocuments.isFillIn"
              label="ご記入"
            >
            </v-checkbox>
          </v-col>
          <v-col cols="2" class="mx-1 d-flex align-center">
            <v-checkbox
              @change="poaOssKubunCompleted"
              v-if="
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === '銀行ローン') &&
                (this.normalCarDocuments.poaOssKubun === '委任状' ||
                  this.normalCarDocuments.poaOssKubun === 'OSS委任状')
              "
              v-model="normalCarDocuments.isRegisteredSeal"
              label="実印"
            >
            </v-checkbox>

            <v-checkbox
              @change="poaOssKubunCompleted"
              v-if="
                (this.contracts.paymentKubun === 'クレジット' ||
                  this.contracts.paymentKubun === '所有権留保') &&
                (this.normalCarDocuments.poaOssKubun === '委任状' ||
                  this.normalCarDocuments.poaOssKubun === 'OSS委任状')
              "
              v-model="normalCarDocuments.isStamping"
              label="認印"
            >
            </v-checkbox>
          </v-col>

          <v-col cols="2" class="mx-1 d-flex align-center">
            <v-checkbox
              @change="poaOssKubunCompleted"
              v-if="
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === '銀行ローン') &&
                (this.normalCarDocuments.poaOssKubun === '委任状' ||
                  this.normalCarDocuments.poaOssKubun === 'OSS委任状')
              "
              v-model="normalCarDocuments.isSealCertificate"
              label="印鑑証明"
            >
            </v-checkbox>

            <v-checkbox
              @change="poaOssKubunCompleted"
              v-if="
                (this.contracts.paymentKubun === 'クレジット' ||
                  this.contracts.paymentKubun === '所有権留保') &&
                (this.normalCarDocuments.poaOssKubun === '委任状' ||
                  this.normalCarDocuments.poaOssKubun === 'OSS委任状')
              "
              v-model="normalCarDocuments.isResidentCard"
              label="住民票"
            >
            </v-checkbox>
          </v-col>
          <v-col
            v-if="
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン' ||
                this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保') &&
              (this.normalCarDocuments.poaOssKubun === '委任状' ||
                this.normalCarDocuments.poaOssKubun === 'OSS委任状')
            "
            cols="2"
            class="mb-6 d-flex align-center"
          >
            <div
              class="complete"
              :class="{
                'is-fill-in-completed':
                  (this.normalCarDocuments.isFillIn &&
                    this.normalCarDocuments.isRegisteredSeal &&
                    this.normalCarDocuments.isSealCertificate) ||
                  (this.normalCarDocuments.isFillIn &&
                    this.normalCarDocuments.isStamping &&
                    this.normalCarDocuments.isResidentCard),
              }"
            >
              完了
            </div>
          </v-col>
          <!-- <v-col
          cols="2"
          class="mx-1 normalCarDocuments-completedDate"
          v-if="
            this.normalCarDocuments.poaOssKubun === '委任状' ||
            this.normalCarDocuments.poaOssKubun === 'OSS委任状'
          "
        >
          <v-text-field
            :class="{
              'completedDate-input': normalCarDocuments.completedDate != false,
            }"
            type="date"
            v-model="normalCarDocuments.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.contracts.paymentKubun === '現金' &&
            this.normalCarDocuments.poaOssKubun === 'OSS委任状'
          "
        >
          <p class="explanation ml-16">
            ・現金でのお支払いの場合、お車の所有者お客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。<br />
            　　ワンストップサービス（OSS）は、自動車を保有するために必要となる手続きと税金や手数料の納付を<br />
            　　インターネット上で一括して行うことを可能とした国土交通省が提供しているサービスです。
          </p>
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.contracts.paymentKubun === 'クレジット' &&
            this.normalCarDocuments.poaOssKubun === 'OSS委任状'
          "
        >
          <p class="explanation ml-16">
            ・クレジットでのお支払いの場合、<b>認印</b>と<b>住民票</b>が必要となります。<br />
            　　ワンストップサービス（OSS）は、自動車を保有するために必要となる手続きと税金や手数料の納付を<br />
            　　インターネット上で一括して行うことを可能とした国土交通省が提供しているサービスです。
          </p>
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.contracts.paymentKubun === '銀行ローン' &&
            this.normalCarDocuments.poaOssKubun === 'OSS委任状'
          "
        >
          <p class="explanation ml-16">
            ・銀行ローンでのお支払いの場合、お車の所有者はお客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。<br />
            　　ワンストップサービス（OSS）は、自動車を保有するために必要となる手続きと税金や手数料の納付を<br />
            　　インターネット上で一括して行うことを可能とした国土交通省が提供しているサービスです。
          </p>
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.contracts.paymentKubun === '所有権留保' &&
            this.normalCarDocuments.poaOssKubun === 'OSS委任状'
          "
        >
          <p class="explanation ml-16">
            ・所有権留保でのお支払いの場合、<b>認印</b>と<b>住民票</b>が必要となります。<br />
            　　ワンストップサービス（OSS）は、自動車を保有するために必要となる手続きと税金や手数料の納付を<br />
            　　インターネット上で一括して行うことを可能とした国土交通省が提供しているサービスです。
          </p>
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.contracts.paymentKubun === '現金' &&
            this.normalCarDocuments.poaOssKubun === '委任状'
          "
        >
          <p class="explanation ml-16">
            ・現金でのお支払いの場合、お車の所有者はお客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。<br />
            　　最近ではワンストップサービス（OSS）を使用したお車の登録が主流ですが、車の登録日を急ぎたい（納車日を急ぎたい）<br />
            　　場合などにOSSでの登録を使用しない場合があります。
          </p>
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.contracts.paymentKubun === 'クレジット' &&
            this.normalCarDocuments.poaOssKubun === '委任状'
          "
        >
          <p class="explanation ml-16">
            ・クレジットでのお支払いの場合、<b>認印</b>と<b>住民票</b>が必要となります。<br />
            　　最近ではワンストップサービス（OSS）を使用したお車の登録が主流ですが、車の登録日を急ぎたい（納車日を急ぎたい）<br />
            　　場合などにOSSでの登録を使用しない場合があります。
          </p>
        </v-row>

        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.contracts.paymentKubun === '銀行ローン' &&
            this.normalCarDocuments.poaOssKubun === '委任状'
          "
        >
          <p class="explanation ml-16">
            ・銀行ローンでのお支払いの場合、お車の所有者はお客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。<br />
            　　最近ではワンストップサービス（OSS）を使用したお車の登録が主流ですが、車の登録日を急ぎたい（納車日を急ぎたい）<br />
            　　場合などにOSSでの登録を使用しない場合があります。
          </p>
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.contracts.paymentKubun === '所有権留保' &&
            this.normalCarDocuments.poaOssKubun === '委任状'
          "
        >
          <p class="explanation ml-16">
            ・所有権留保の場合、<b>認印</b>と<b>住民票</b>が必要となります。<br />
            　　最近ではワンストップサービス（OSS）を使用したお車の登録が主流ですが、車の登録日を急ぎたい（納車日を急ぎたい）<br />
            　　場合などにOSSでの登録を使用しない場合があります。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン') &&
              this.normalCarDocuments.poaOssKubun === 'OSS委任状'
            "
          >
            <v-btn
              @click="ossRegisteredSealModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              (this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保') &&
              this.normalCarDocuments.poaOssKubun === 'OSS委任状'
            "
          >
            <v-btn
              @click="ossStampingModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン') &&
              this.normalCarDocuments.poaOssKubun === 'OSS委任状'
            "
          >
            <v-btn @click="ossImg" density="compact" icon="mdi-printer"></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              (this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保') &&
              this.normalCarDocuments.poaOssKubun === 'OSS委任状'
            "
          >
            <v-btn @click="ossImg" density="compact" icon="mdi-printer"></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン' ||
                this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保') &&
              this.normalCarDocuments.poaOssKubun === 'OSS委任状'
            "
          >
            <v-btn
              href="https://www.OSS委任状.mlit.go.jp/portal/beginner/osstowa/index.html"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン') &&
              this.normalCarDocuments.poaOssKubun === '委任状'
            "
          >
            <v-btn
              @click="poaRegisteredSealModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              (this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保') &&
              this.normalCarDocuments.poaOssKubun === '委任状'
            "
          >
            <v-btn
              @click="poaStampingModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン') &&
              this.normalCarDocuments.poaOssKubun === '委任状'
            "
          >
            <v-btn @click="poaImg" density="compact" icon="mdi-printer"></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              (this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保') &&
              this.normalCarDocuments.poaOssKubun === '委任状'
            "
          >
            <v-btn @click="poaImg" density="compact" icon="mdi-printer"></v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-toolbar-title
            class="ml-15 d-flex align-center lightCarDocuments"
            v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
          >
            　➀ 申請依頼書（お車の登録、検査手続きを代行させて頂く手続きです。）
          </v-toolbar-title>
        </v-row>

        <v-row
          class="mt-10"
          v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
        >
          <v-col cols="2" class="ml-15">
            <v-combobox
              @update:modelValue="lightCarDocumentsKubunChange"
              v-model="lightCarDocuments.lightCarDocumentsKubun"
              label=""
              :items="[]"
              variant="outlined"
              readonly
            ></v-combobox>
          </v-col>

          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="
              this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'
            "
          >
            <v-checkbox
              @change="lightCarDocumentsKubunCompleted"
              v-model="lightCarDocuments.isFillIn"
              label="ご記入"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="
              this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'
            "
          >
            <v-checkbox
              @change="lightCarDocumentsKubunCompleted"
              v-model="lightCarDocuments.isStamping"
              label="認印"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="
              this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'
            "
          >
            <v-checkbox
              @change="lightCarDocumentsKubunCompleted"
              v-model="lightCarDocuments.isResidentCard"
              label="住民票"
            >
            </v-checkbox>
          </v-col>
          <v-col
            v-if="
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン' ||
                this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保') &&
              this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'
            "
            cols="2"
            class="mb-6 d-flex align-center"
          >
            <div
              class="complete"
              :class="{
                'is-fill-in-completed':
                  this.lightCarDocuments.isFillIn &&
                  this.lightCarDocuments.isStamping &&
                  this.lightCarDocuments.isResidentCard,
              }"
            >
              完了
            </div>
          </v-col>
          <!-- <v-col
          cols="2"
          class="mx-1 lightCarDocuments-completedDate"
          v-if="this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'"
        >
          <v-text-field
            :class="{
              'completedDate-input': lightCarDocuments.completedDate != false,
            }"
            type="date"
            v-model="lightCarDocuments.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
          <!-- <v-col
          cols="2"
          class="ml-16 lightCarDocuments-completedDate"
          v-if="this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'"
        >
          <v-btn @click="aaaaaaaa" density="compact" icon="mdi-printer"></v-btn>
        </v-col> -->
        </v-row>
        <v-row v-if="this.contracts.normalCarLightCarKubun === '軽自動車'">
          <p class="explanation ml-16">
            ・軽自動車の場合、<b>認印</b>と<b>住民票</b>が必要となります。
          </p>
        </v-row>
        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.contracts.normalCarLightCarKubun === '軽自動車' &&
              this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書' &&
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン')
            "
          >
            <v-btn
              @click="lightCarDocumentsOwnerAndUserModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.contracts.normalCarLightCarKubun === '軽自動車' &&
              this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書' &&
              (this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保')
            "
          >
            <v-btn
              @click="lightCarDocumentsUserModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              this.contracts.normalCarLightCarKubun === '軽自動車' &&
              this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書' &&
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン')
            "
          >
            <v-btn
              @click="lightCarDocumentsImg"
              density="compact"
              icon="mdi-printer"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              this.contracts.normalCarLightCarKubun === '軽自動車' &&
              this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書' &&
              (this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '所有権留保')
            "
          >
            <v-btn
              @click="lightCarDocumentsImg"
              density="compact"
              icon="mdi-printer"
            ></v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-toolbar-title
            class="mt-5 ml-15 mb-5 d-flex align-center normalCarDocumentsGarageVerification"
            v-if="
              this.normalCarDocuments.poaOssKubun === '委任状' ||
              (this.contracts.newCarUsedCarKubun === '中古車' &&
                this.contracts.normalCarLightCarKubun === '普通車')
            "
          >
            　➁
            車庫証明（ご成約頂いたお車の保管場所を警察署に届け出するための手続きです。）
          </v-toolbar-title>
        </v-row>

        <v-row class="mt-5">
          <v-col
            cols="2"
            class="ml-15"
            v-if="
              this.normalCarDocuments.poaOssKubun === '委任状' ||
              (this.contracts.newCarUsedCarKubun === '中古車' &&
                this.contracts.normalCarLightCarKubun === '普通車')
            "
          >
            <v-select
              @update:modelValue="NCgarageVerificationKubunChange"
              label="車庫証明"
              v-model="
                normalCarDocumentsGarageVerification.NCgarageVerificationKubun
              "
              :items="['', '保管場所証明申請書', '代行不要']"
              variant="outlined"
            ></v-select>
          </v-col>

          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書'
            "
          >
            <v-checkbox
              @change="NCgarageVerificationKubunCompleted"
              v-model="normalCarDocumentsGarageVerification.isFillIn"
              label="ご記入"
            >
            </v-checkbox>
          </v-col>
          <v-col cols="2" class="mx-1"> </v-col>
          <v-col cols="2" class="mx-1"> </v-col>

          <v-col
            v-if="
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書'
            "
            cols="2"
            class="mb-6 d-flex align-center"
          >
            <div
              class="ncgarage-verification-kubun-completed"
              :class="{
                'is-fill-in-completed':
                  this.normalCarDocumentsGarageVerification.isFillIn,
              }"
            >
              完了
            </div>
          </v-col>

          <!-- <v-col
            cols="2"
            class="mx-1 normalCarDocumentsGarageVerification-completedDate"
            v-if="
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書'
            "
          >
            <v-text-field
              :class="{
                'completedDate-input':
                  normalCarDocumentsGarageVerification.completedDate != false,
              }"
              type="date"
              v-model="normalCarDocumentsGarageVerification.completedDate"
              label="完了日"
            ></v-text-field>
          </v-col> -->
        </v-row>
        <v-row
          v-if="
            this.normalCarDocumentsGarageVerification
              .NCgarageVerificationKubun === '保管場所証明申請書'
          "
        >
          <p class="explanation ml-16">
            ・普通車用の車庫証明、4枚綴り（つづり）です。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書'
            "
          >
            <v-btn
              @click="NCgarageVerificationModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書'
            "
          >
            <v-btn
              href="https://www.pref.hiroshima.lg.jp/site/police/055-05505-hokan.html"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-toolbar-title
            class="ml-15 mb-5 d-flex align-center lightCarDocumentsGarageVerification"
            v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
          >
            　➁
            車庫証明（ご成約頂いたお車の保管場所を警察署に届け出するための手続きです。）
          </v-toolbar-title>
        </v-row>

        <v-row class="mt-5">
          <v-col
            cols="2"
            class="ml-15"
            v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
          >
            <v-select
              @update:modelValue="LCgarageVerificationKubunChange"
              label="車庫証明"
              v-model="
                lightCarDocumentsGarageVerification.LCgarageVerificationKubun
              "
              :items="['', '保管場所届出書', '代行不要']"
              variant="outlined"
            ></v-select>
          </v-col>

          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="
              this.lightCarDocumentsGarageVerification
                .LCgarageVerificationKubun === '保管場所届出書'
            "
          >
            <v-checkbox
              @change="LCgarageVerificationKubunCompleted"
              v-model="lightCarDocumentsGarageVerification.isFillIn"
              label="ご記入"
            >
            </v-checkbox>
          </v-col>
          <v-col cols="2" class="mx-1"> </v-col>
          <v-col cols="2" class="mx-1"> </v-col>
          <v-col
            v-if="
              this.lightCarDocumentsGarageVerification
                .LCgarageVerificationKubun === '保管場所届出書'
            "
            cols="2"
            class="mb-6 d-flex align-center"
          >
            <div
              class="lcgarage-verification-kubun-completed"
              :class="{
                'is-fill-in-completed':
                  this.lightCarDocumentsGarageVerification.isFillIn,
              }"
            >
              完了
            </div>
          </v-col>

          <!-- <v-col
          cols="2"
          class="mx-1 lightCarDocumentsGarageVerification-completedDate"
          v-if="
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '保管場所届出書'
          "
        >
          <v-text-field
            :class="{
              'completedDate-input':
                lightCarDocumentsGarageVerification.completedDate != false,
            }"
            type="date"
            v-model="lightCarDocumentsGarageVerification.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row
          v-if="
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '保管場所届出書'
          "
        >
          <p class="explanation ml-16">
            ・軽自動車用の車庫証明、4枚綴り（つづり）です。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.lightCarDocumentsGarageVerification
                .LCgarageVerificationKubun === '保管場所届出書'
            "
          >
            <v-btn
              href=""
              target="_blank"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              this.lightCarDocumentsGarageVerification
                .LCgarageVerificationKubun === '保管場所届出書'
            "
          >
            <v-btn
              href=""
              target="_blank"
              density="compact"
              icon="mdi-printer"
            ></v-btn>
          </v-col>
        </v-row>

        <!-- <v-row>
        <v-col
          cols="1"
          class="ml-16 d-flex align-center"
          v-if="
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '保管場所届出書'
          "
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row> -->
        <v-row>
          <v-toolbar-title
            class="ml-15 mb-5 d-flex align-center normalCarDocumentsGarageVerification"
            v-if="this.normalCarDocuments.poaOssKubun === 'OSS委任状'"
          >
            　➁
            車庫証明（ご成約頂いたお車の保管場所を警察署に届け出するための手続きです。）
          </v-toolbar-title>
        </v-row>
        <v-row
          class="mt-5"
          v-if="
            this.normalCarDocuments.poaOssKubun === 'OSS委任状' ||
            this.normalCarDocumentsGarageVerification
              .NCgarageVerificationKubun === '保管場所証明申請書' ||
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '保管場所届出書'
          "
        >
          <v-col cols="2" class="ml-15">
            <v-select
              @update:modelValue="selfCertificationConsentToUseKubunChange"
              label="自認書or使用承諾書"
              v-model="storingMethod.selfCertificationConsentToUseKubun"
              :items="['', '自認書', '使用承諾証']"
              variant="outlined"
            ></v-select>
          </v-col>

          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="
              this.storingMethod.selfCertificationConsentToUseKubun ===
                '自認書' ||
              this.storingMethod.selfCertificationConsentToUseKubun ===
                '使用承諾証'
            "
          >
            <v-checkbox label="ご記入" v-model="storingMethod.isFillIn">
            </v-checkbox>
          </v-col>
          <v-col cols="2" class="mx-1"> </v-col>
          <v-col cols="2" class="mx-1"> </v-col>
          <v-col
            v-if="
              this.storingMethod.selfCertificationConsentToUseKubun ===
                '自認書' ||
              this.storingMethod.selfCertificationConsentToUseKubun ===
                '使用承諾証'
            "
            cols="2"
            class="mb-6 d-flex align-center"
          >
            <div
              class="self-certification-consent-to-use-kubun-completed"
              :class="{
                'is-fill-in-completed': storingMethod.isFillIn,
              }"
            >
              完了
            </div>
          </v-col>

          <!-- <v-col
          cols="2"
          class="mx-1 storingMethod-completedDate"
          v-if="
            this.storingMethod.selfCertificationConsentToUseKubun ===
              '自認書' ||
            this.storingMethod.selfCertificationConsentToUseKubun ===
              '使用承諾証'
          "
        >
          <v-text-field
            :class="{
              'completedDate-input': storingMethod.completedDate != false,
            }"
            type="date"
            v-model="storingMethod.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row
          v-if="
            this.storingMethod.selfCertificationConsentToUseKubun === '自認書'
          "
        >
          <p class="explanation ml-16">
            ・ご成約頂いたお車の保管場所がお客様の所有物である事を証明するための書類です。
          </p>
        </v-row>
        <v-row
          v-if="
            this.storingMethod.selfCertificationConsentToUseKubun ===
            '使用承諾証'
          "
        >
          <p class="explanation ml-16">
            ・お客様がお車の保管場所を賃借されている場合、土地所有者から発行して頂く書類です。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.storingMethod.selfCertificationConsentToUseKubun === '自認書'
            "
          >
            <v-btn
              @click="selfCertification = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              this.storingMethod.selfCertificationConsentToUseKubun === '自認書'
            "
          >
            <v-btn
              @click="selfCertificationImg"
              density="compact"
              icon="mdi-printer"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.storingMethod.selfCertificationConsentToUseKubun ===
              '使用承諾証'
            "
          >
            <v-btn
              @click="ConsentToUseModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              this.storingMethod.selfCertificationConsentToUseKubun ===
              '使用承諾証'
            "
          >
            <v-btn
              @click="consentToUseImg"
              density="compact"
              icon="mdi-printer"
            ></v-btn>
          </v-col>
        </v-row>

        <!-- <v-row>
        <v-col
          cols="1"
          class="ml-16 d-flex align-center"
          v-if="
            this.storingMethod.selfCertificationConsentToUseKubun === '自認書'
          "
        >
          <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn>
        </v-col>
      </v-row> -->
        <v-row
          class="mt-5"
          v-if="
            this.normalCarDocuments.poaOssKubun === 'OSS委任状' ||
            this.normalCarDocuments.poaOssKubun === '委任状' ||
            (this.normalCarDocuments.poaKubun &&
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書') ||
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '保管場所届出書'
          "
        >
          <v-col cols="2" class="ml-15">
            <v-combobox
              v-model="arrangementDiagram.arrangementDiagramName"
              label=""
              :items="[]"
              variant="outlined"
              readonly
            ></v-combobox>
          </v-col>

          <v-col cols="2" class="mx-1 d-flex align-center">
            <v-checkbox
              @change="arrangementDiagramCompleted"
              label="ご記入"
              v-model="arrangementDiagram.isFillIn"
            >
            </v-checkbox>
          </v-col>
          <v-col cols="2" class="mx-1"> </v-col>
          <v-col cols="2" class="mx-1"> </v-col>
          <v-col cols="2" class="mb-6 d-flex align-center">
            <div
              class="arrangement-diagram-completed"
              :class="{
                'is-fill-in-completed': arrangementDiagram.isFillIn,
              }"
            >
              完了
            </div>
          </v-col>
          <!-- <v-col cols="2" class="mx-1 arrangement-completedDate">
          <v-text-field
            :class="{
              'completedDate-input': arrangementDiagram.completedDate != false,
            }"
            type="date"
            v-model="arrangementDiagram.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row
          v-if="
            this.normalCarDocuments.poaOssKubun === 'OSS委任状' ||
            this.normalCarDocumentsGarageVerification
              .NCgarageVerificationKubun === '保管場所証明申請書' ||
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '保管場所届出書'
          "
        >
          <p class="explanation ml-16">
            ・お客様がお車の保管場所にどのように車を保管されているか確認するための書類です。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.normalCarDocuments.poaOssKubun === 'OSS委任状' ||
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書' ||
              this.lightCarDocumentsGarageVerification
                .LCgarageVerificationKubun === '保管場所届出書'
            "
          >
            <v-btn
              @click="arrangementDiagramNameModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              this.normalCarDocuments.poaOssKubun === 'OSS委任状' ||
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書' ||
              this.lightCarDocumentsGarageVerification
                .LCgarageVerificationKubun === '保管場所届出書'
            "
          >
            <v-btn
              @click="arrangementDiagramNameImg"
              density="compact"
              icon="mdi-printer"
            ></v-btn>
          </v-col>
        </v-row>

        <!-- <v-row>
        <v-col
          cols="1"
          class="ml-16 d-flex align-center"
          v-if="
            this.normalCarDocuments.poaOssKubun === 'OSS委任状' ||
            this.normalCarDocumentsGarageVerification
              .NCgarageVerificationKubun === '保管場所証明申請書' ||
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '保管場所届出書' ||
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '代行不要'
          "
        >
          <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn>
        </v-col>
      </v-row> -->
        <v-row>
          <v-toolbar-title
            class="mt-8 ml-15 mb-5 d-flex align-center other-documents"
            v-if="this.contracts.normalCarLightCarKubun === '普通車'"
          >
            　➂
            その他（希望番号・ETC・延長保証・メンテナンスパック・JAFについてのお伺い致します。）
          </v-toolbar-title>
        </v-row>

        <v-row>
          <v-toolbar-title
            class="mt-8 ml-15 mb-5 d-flex align-center other-documents"
            v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
          >
            　➂
            その他（希望番号・ETC・延長保証・メンテナンスパック・JAF・税申告書についてお伺い致します。）
          </v-toolbar-title>
        </v-row>

        <v-row class="mt-5">
          <v-col
            cols="2"
            class="ml-15"
            v-if="
              this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車'
            "
          >
            <v-select
              @update:modelValue="isDesiredNumberChange"
              label="希望番号"
              v-model="desiredNumber.isDesiredNumber"
              :items="['', '有', '無']"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="this.desiredNumber.isDesiredNumber === '有'"
          >
            <v-checkbox
              @change="isDesiredNumberCompleted"
              label="ご記入"
              v-model="desiredNumber.isFillIn"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.desiredNumber.isDesiredNumber === '有'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.desiredNumber.isDesiredNumber === '有'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mb-6 d-flex align-center"
            v-if="this.desiredNumber.isDesiredNumber === '有'"
          >
            <div
              class="desired-number-completed"
              :class="{
                'is-fill-in-completed': desiredNumber.isFillIn,
              }"
            >
              完了
            </div>
          </v-col>
          <!-- <v-col
          cols="2"
          class="mx-1 desiredNumber-completedDate"
          v-if="this.desiredNumber.isDesiredNumber === '有'"
        >
          <v-text-field
            :class="{
              'completedDate-input': desiredNumber.completedDate != false,
            }"
            type="date"
            v-model="desiredNumber.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row v-if="this.desiredNumber.isDesiredNumber === '有'">
          <p class="explanation ml-16">
            ・お客様からお伺いした希望番号（4桁の数字）を届け出するための書類です。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="this.desiredNumber.isDesiredNumber === '有'"
          >
            <v-btn
              @click="desiredNumberModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="this.desiredNumber.isDesiredNumber === '有'"
          >
            <v-btn
              @click="desiredNumberImg"
              density="compact"
              icon="mdi-printer"
            ></v-btn>
          </v-col>
        </v-row>

        <!-- <v-row>
        <v-col
          cols="1"
          class="ml-16 d-flex align-center"
          v-if="this.desiredNumber.isDesiredNumber === '有'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn>
        </v-col>
      </v-row> -->
        <v-row class="mt-5">
          <v-col
            cols="2"
            class="ml-15"
            v-if="
              this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車'
            "
          >
            <v-select
              @update:modelValue="etcKubunChange"
              label="ETC"
              v-model="etc.etcKubun"
              :items="['', 'ETC', 'ETC-2.0', '無']"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
          >
            <v-checkbox
              @change="etcKubunCompleted"
              label="ご記入"
              v-model="etc.isFillIn"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mb-6 d-flex align-center"
            v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
          >
            <div
              class="etc-kubun-completed"
              :class="{
                'is-fill-in-completed': etc.isFillIn,
              }"
            >
              完了
            </div>
          </v-col>

          <!-- <v-col
          cols="2"
          class="mx-1 d-flex align-center"
          v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
        >
        </v-col>

        <v-col
          cols="2"
          class="mx-1 etc-completedDate"
          v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
        >
          <v-text-field
            :class="{
              'completedDate-input': etc.completedDate != false,
            }"
            type="date"
            v-model="etc.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row v-if="this.etc.etcKubun === 'ETC'">
          <p class="explanation ml-16">
            ・ご成約頂いたお車のETCを使用できるようにするための書類です。
          </p>
        </v-row>
        <v-row v-if="this.etc.etcKubun === 'ETC-2.0'">
          <p class="explanation ml-16">
            ・ご成約頂いたお車のETCを使用できるようにするための書類です。<br />
            　　ETC2.0は、高速道路の通行料金の支払いに便利なETCが進化したもので、2016年春からスタートしたサービスです。<br />
            　　リアルタイムの渋滞情報を解析して最適なルートを示したり、災害発生時に通行可能な道路へ誘導することで、<br />
            　　より安全・安心な走行をサポートします。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="this.etc.etcKubun === 'ETC'"
          >
            <v-btn
              @click="etcModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="etc.etcKubun === 'ETC-2.0'"
          >
            <v-btn
              @click="etc2Modal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>

          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
          >
            <v-btn
              href="https://www.go-etc.jp/"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
        </v-row>

        <!-- <v-row>
        <v-col
          cols="1"
          class="ml-16 d-flex align-center"
          v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row> -->
        <v-row class="mt-5">
          <v-col
            cols="2"
            class="ml-15"
            v-if="
              this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車'
            "
          >
            <v-select
              @update:modelValue="isExtendedWarrantyChange"
              label="延長保証"
              v-model="extendedWarranty.isExtendedWarranty"
              :items="['', '有', '無']"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="this.extendedWarranty.isExtendedWarranty === '有'"
          >
            <v-checkbox
              @change="isExtendedWarrantyCompleted"
              label="ご記入"
              v-model="extendedWarranty.isFillIn"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.extendedWarranty.isExtendedWarranty === '有'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.extendedWarranty.isExtendedWarranty === '有'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mb-6 d-flex align-center"
            v-if="this.extendedWarranty.isExtendedWarranty === '有'"
          >
            <div
              class="extended-warranty-completed"
              :class="{
                'is-fill-in-completed': extendedWarranty.isFillIn,
              }"
            >
              完了
            </div>
          </v-col>
          <!-- <v-col
          cols="2"
          class="mx-1 extendedWarranty-completedDate"
          v-if="this.extendedWarranty.isExtendedWarranty === '有'"
        >
          <v-text-field
            :class="{
              'completedDate-input': extendedWarranty.completedDate != false,
            }"
            type="date"
            v-model="extendedWarranty.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.extendedWarranty.isExtendedWarranty === '有'
          "
        >
          <p class="explanation ml-16">
            ・ご成約頂いたお車に延長保証を適用するための書類です。<br />
            　　メーカーの一般保証は、新車登録から初回車検を迎える3年目（ただし6万km）で終了してしまいます。<br />
            　　マツダ延長保証〈新車5年プラン/5年プラン〉は、保証期間を5年目（ただし10万km）まで延長。<br />
            　　万が一の故障の際も、回数・金額無制限の無料修理が受けられます。<br />
            　　※ただし機能不具合を伴わない修理は保証対象になりません。
          </p>
        </v-row>
        <v-row
          v-if="
            this.contracts.newCarUsedCarKubun === '中古車' &&
            this.extendedWarranty.isExtendedWarranty === '有'
          "
        >
          <p class="explanation ml-16">
            ・ご成約頂いたお車に延長保証を適用するための書類です。<br />
            　　保証にさらなる安心をプラス。万が一の故障でも無料で修理。<br />
            　　「さわやか保証2年」「さわやか保証」の期間を、有償で延長できる保証サービスです。<br />
            　　マツダ認定U-carプレミアム車両を対象とした「さわやか保証2年」の期間を延長できる「さわやかプラスプレミアム」、<br />
            　　それ以外の車両を対象とした「さわやか保証」の期間を延長できる「さわやかプラス」をご用意しています。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.contracts.newCarUsedCarKubun === '新車' &&
              this.extendedWarranty.isExtendedWarranty === '有'
            "
          >
            <v-btn
              @click="newCarExtendedWarrantyModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              this.contracts.newCarUsedCarKubun === '新車' &&
              this.extendedWarranty.isExtendedWarranty === '有'
            "
          >
            <v-btn
              href="https://www.mazda.co.jp/purchase/carlife-care/encho-hosho/5years/"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.contracts.newCarUsedCarKubun === '中古車' &&
              this.extendedWarranty.isExtendedWarranty === '有'
            "
          >
            <v-btn
              @click="usedCarExtendedWarrantyModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              this.contracts.newCarUsedCarKubun === '中古車' &&
              this.extendedWarranty.isExtendedWarranty === '有'
            "
          >
            <v-btn
              href="https://www.mazda.co.jp/purchase/ucar/plus/#tab_anch"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
        </v-row>

        <v-row class="mt-5">
          <v-col
            cols="2"
            class="ml-15"
            v-if="
              this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車'
            "
          >
            <v-select
              @update:modelValue="isMaintenancePackChange"
              label="メンテナンスパック"
              v-model="maintenancePack.isMaintenancePack"
              :items="['', '有', '無']"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="this.maintenancePack.isMaintenancePack === '有'"
          >
            <v-checkbox
              @change="isMaintenancePackCompleted"
              label="ご記入"
              v-model="maintenancePack.isFillIn"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.maintenancePack.isMaintenancePack === '有'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.maintenancePack.isMaintenancePack === '有'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mb-6 d-flex align-center"
            v-if="this.maintenancePack.isMaintenancePack === '有'"
          >
            <div
              class="maintenance-pack-completed"
              :class="{
                'is-fill-in-completed': maintenancePack.isFillIn,
              }"
            >
              完了
            </div>
          </v-col>

          <!-- <v-col
          cols="2"
          class="mx-1 maintenancePack-completedDate"
          v-if="this.maintenancePack.isMaintenancePack === '有'"
        >
          <v-text-field
            :class="{
              'completedDate-input': maintenancePack.completedDate != false,
            }"
            type="date"
            v-model="maintenancePack.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row v-if="this.maintenancePack.isMaintenancePack === '有'">
          <p class="explanation ml-16">
            ・お車のご成約時、メンテナンスパック（パックdeメンテ）にご加入頂いた際に頂く書類です。<br />
            　　ご商談の際は36Sコース（点検、5年後2回目の車検までがセットになったプラン）<br />
            　　をおすすめとしてご提案させて頂いています。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="this.maintenancePack.isMaintenancePack === '有'"
          >
            <v-btn
              @click="maintenancePackModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="this.maintenancePack.isMaintenancePack === '有'"
          >
            <v-btn
              href="https://www.efh.co.jp/after-service/maintenance/#pack"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
        </v-row>

        <v-row class="mt-5">
          <v-col
            cols="2"
            class="ml-15"
            v-if="
              this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車'
            "
          >
            <v-select
              @update:modelValue="isJafPaymentKubunChange"
              label="JAF"
              v-model="jaf.isJafPaymentKubun"
              :items="['', '有（口座振替）', '有（クレジット）', '無']"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="
              this.jaf.isJafPaymentKubun === '有（口座振替）' ||
              this.jaf.isJafPaymentKubun === '有（クレジット）'
            "
          >
            <v-checkbox
              @change="isJafPaymentKubunCompleted"
              label="電子手続き"
              v-model="jaf.isFillIn"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="
              this.jaf.isJafPaymentKubun === '有（口座振替）' ||
              this.jaf.isJafPaymentKubun === '有（クレジット）'
            "
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="
              this.jaf.isJafPaymentKubun === '有（口座振替）' ||
              this.jaf.isJafPaymentKubun === '有（クレジット）'
            "
          >
          </v-col>
          <v-col
            cols="2"
            class="mb-6 d-flex align-center"
            v-if="
              this.jaf.isJafPaymentKubun === '有（口座振替）' ||
              this.jaf.isJafPaymentKubun === '有（クレジット）'
            "
          >
            <div
              class="jaf-payment-kubun-completed"
              :class="{
                'is-fill-in-completed': jaf.isFillIn,
              }"
            >
              完了
            </div>
          </v-col>

          <!-- <v-col
          cols="2"
          class="mx-1 d-flex align-center"
          v-if="this.jaf.isJafPaymentKubun === '有（口座振替）'"
        >
          <v-checkbox
            @change="isJafPaymentKubunCompleted"
            v-model="jaf.isBankSeal"
            label="銀行印"
          >
          </v-checkbox>
        </v-col>
        <v-col
          cols="2"
          class="mx-1 jaf-completedDate"
          v-if="
            this.jaf.isJafPaymentKubun === '有（口座振替）' ||
            this.jaf.isJafPaymentKubun === '有（クレジット）'
          "
        >
          <v-text-field
            :class="{
              'completedDate-input': jaf.completedDate != false,
            }"
            type="date"
            v-model="jaf.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row
          v-if="
            this.jaf.isJafPaymentKubun === '有（口座振替）' ||
            this.jaf.isJafPaymentKubun === '有（クレジット）'
          "
        >
          <p class="explanation ml-16">
            ・ご成約頂いたお車がJAFに加入される際の手続きです。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.jaf.isJafPaymentKubun === '有（口座振替）' ||
              this.jaf.isJafPaymentKubun === '有（クレジット）'
            "
          >
            <v-btn
              href="https://jafenta.jp/site/login/"
              target="_blank"
              density="compact"
              icon="mdi-login"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="
              this.jaf.isJafPaymentKubun === '有（口座振替）' ||
              this.jaf.isJafPaymentKubun === '有（クレジット）'
            "
          >
            <v-btn
              href="https://jaf.or.jp/individual"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
        </v-row>

        <v-row
          class="mt-5"
          v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
        >
          <v-col cols="2" class="ml-16">
            <v-combobox
              class="v-select-list"
              v-model="taxDeclaration.taxDeclarationName"
              label=""
              :items="[]"
              variant="outlined"
              readonly
            ></v-combobox>
          </v-col>
          <v-col cols="2 taxDeclaration" class="mx-1 d-flex align-center">
            <v-checkbox
              @change="taxDeclarationCompleted"
              label="ご記入"
              v-model="taxDeclaration.isFillIn"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mb-6 d-flex align-center"
            v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
          >
            <div
              class="tax-declaration-completed"
              :class="{
                'is-fill-in-completed': taxDeclaration.isFillIn,
              }"
            >
              完了
            </div>
          </v-col>

          <!-- <v-col cols="2 taxDeclaration-completedDate" class="mx-1">
          <v-text-field
            :class="{
              'completedDate-input': taxDeclaration.completedDate != false,
            }"
            type="date"
            v-model="taxDeclaration.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row v-if="this.contracts.normalCarLightCarKubun === '軽自動車'">
          <p class="explanation ml-16">
            ・ご成約頂いたお車が軽自動車の際に、自動車税の支払い開始を申告するための書類です。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
          >
            <v-btn
              @click="taxDeclarationNameModal = true"
              density="compact"
              icon="mdi-help"
            ></v-btn>
          </v-col>
        </v-row>

        <!-- <v-row>
        <v-col
          cols="1"
          class="ml-16 d-flex align-center"
          v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn>
        </v-col>
      </v-row> -->
        <v-row>
          <v-toolbar-title
            class="mt-8 ml-15 mb-5 d-flex align-center insurance"
            v-if="
              this.contracts.insuranceKubun === '当社加入' ||
              this.contracts.insuranceKubun === '他社加入'
            "
          >
            　➃
            保険（お客様の大切なお車、お客様自身の安心・安全をサポートさせて頂く為のご提案です。）
          </v-toolbar-title>
        </v-row>
        <v-row class="mt-5">
          <v-col
            cols="2"
            v-if="this.contracts.insuranceKubun === '当社加入'"
            class="ml-15"
          >
            <v-select
              @update:modelValue="isJocInsuranceCompanyChange"
              label="保険会社"
              v-model="insurance.jocInsuranceCompany"
              :items="['', '東京海上', '三井住友', '損保ジャパン']"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col
            cols="2 taxDeclaration"
            class="mx-1 d-flex align-center"
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
          >
            <v-checkbox
              @change="insuranceCompleted"
              label="電子手続き"
              v-model="insurance.joiningProcedure"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
          >
          </v-col>
          <v-col
            cols="2"
            class="mb-6 d-flex align-center"
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
          >
            <div
              class="insurance-completed"
              :class="{
                'is-fill-in-completed': insurance.joiningProcedure,
              }"
            >
              完了
            </div>
          </v-col>

          <!-- <v-col
          cols="2"
          v-if="
            this.insurance.jocInsuranceCompany === 'A社' ||
            this.insurance.jocInsuranceCompany === 'B社' ||
            this.insurance.jocInsuranceCompany === 'C社'
          "
          class="mx-1 insurance-completedDate"
        > -->
          <!-- <v-text-field
            :class="{
              'completedDate-input': insurance.completedDate != false,
            }"
            type="date"
            v-model="insurance.completedDate"
            label="完了日"
          ></v-text-field> -->
          <!-- </v-col> -->
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="this.insurance.jocInsuranceCompany === '東京海上'"
          >
            <v-btn
              href=""
              target="_blank"
              density="compact"
              icon="mdi-login"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="this.insurance.jocInsuranceCompany === '東京海上'"
          >
            <v-btn
              href="https://www.tokiomarine-nichido.co.jp/"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="this.insurance.jocInsuranceCompany === '東京海上'"
          >
            <v-btn
              href="https://www.tokiomarine-nichido.co.jp/service/auto/pamphlet/"
              target="_blank"
              density="compact"
              icon="mdi-book-open"
            >
            </v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="this.insurance.jocInsuranceCompany === '三井住友'"
          >
            <v-btn
              href=""
              target="_blank"
              density="compact"
              icon="mdi-login"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="this.insurance.jocInsuranceCompany === '三井住友'"
          >
            <v-btn
              href="https://www.ms-ins.com/lp/car-2406h/?utm_source=yahoo&utm_medium=cpc&utm_campaign=regular&utm_content=car_tow500-h_._._brand_._.&adtgt=._cv_src&yclid=YSS.1001283068.EAIaIQobChMI8b_ajYSliQMVb9oWBR228DD3EAAYASAAEgKlmvD_BwE"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="this.insurance.jocInsuranceCompany === '三井住友'"
          >
            <v-btn
              href="https://www.ms-ins.com/personal/pdf/"
              target="_blank"
              density="compact"
              icon="mdi-book-open"
            >
            </v-btn>
          </v-col>

          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="this.insurance.jocInsuranceCompany === '損保ジャパン'"
          >
            <v-btn
              href=""
              target="_blank"
              density="compact"
              icon="mdi-login"
              nuxt
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="this.insurance.jocInsuranceCompany === '損保ジャパン'"
          >
            <v-btn
              href="https://www.sompo-japan.co.jp/"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
          <v-col
            cols="1"
            class="mt-3 d-flex align-center"
            v-if="this.insurance.jocInsuranceCompany === '損保ジャパン'"
          >
            <v-btn
              href="https://www.sompo-japan.co.jp/kinsurance/contents1/"
              target="_blank"
              density="compact"
              icon="mdi-book-open"
            >
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col
            cols="2"
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
            class="ml-15"
          >
            <v-combobox
              label=""
              v-model="insurance.skyPlus"
              :items="[]"
              variant="outlined"
              readonly
            ></v-combobox>
          </v-col>
          <v-col
            cols="2 taxDeclaration"
            class="mx-1 d-flex align-center"
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
          >
            <v-checkbox
              @change="skyPlusCompleted"
              label="ご説明"
              v-model="insurance.skyPlusExplanation"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
          >
          </v-col>
          <v-col
            cols="2"
            class="mb-6 d-flex align-center"
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
          >
            <div
              class="sky-plus-completed"
              :class="{
                'is-fill-in-completed': insurance.skyPlusExplanation,
              }"
            >
              完了
            </div>
          </v-col>
        </v-row>
        <v-row
          v-if="
            this.insurance.jocInsuranceCompany === '東京海上' ||
            this.insurance.jocInsuranceCompany === '三井住友' ||
            this.insurance.jocInsuranceCompany === '損保ジャパン'
          "
        >
          <p class="explanation ml-16">
            ・マツダ販売店で自動車保険を契約された方限定の特典です。<br />
            　　マツダの自動車保険にご加入いただいたお客様に無償で付帯でき、<br />
            　　気になる小傷も、自動車保険（車両保険）を使用せず、わずかなご負担でボディリペアできます。
          </p>
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-15 d-flex align-center"
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
          >
            <v-btn
              href="https://www.mazda.co.jp/purchase/carlife-care/insurance/"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
        </v-row>
        <!-- <v-row>
        <v-col
          cols="1"
          class="ml-16 d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '東京海上'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="ml-16 d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '三井住友'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="ml-16 d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '損保ジャパン'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row> -->
        <v-row class="mt-5">
          <v-col
            cols="2"
            v-if="this.contracts.insuranceKubun === '他社加入'"
            class="ml-15"
          >
            <v-combobox
              v-model="insurance.jacInsuranceCompany"
              label="保険会社"
              :items="[]"
              variant="outlined"
            ></v-combobox>
          </v-col>
          <v-col
            cols="2"
            v-if="this.contracts.insuranceKubun === '他社加入'"
            class="mx-1 d-flex align-center"
          >
            <v-checkbox
              @change="insuranceCompleted2"
              label="加入確認"
              v-model="insurance.confirmationOfMembership"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.contracts.insuranceKubun === '他社加入'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.contracts.insuranceKubun === '他社加入'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mb-6 d-flex align-center"
            v-if="this.contracts.insuranceKubun === '他社加入'"
          >
            <div
              class="insurance-completed2"
              :class="{
                'is-fill-in-completed': insurance.confirmationOfMembership,
              }"
            >
              完了
            </div>
          </v-col>

          <!-- <v-col
          cols="2"
          v-if="this.contracts.insuranceKubun === '他社加入'"
          class="mx-1 insurance-completedDate"
        >
          <v-text-field
            :class="{
              'completedDate-input': insurance.completedDate != false,
            }"
            type="date"
            v-model="insurance.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>
        <v-row>
          <v-toolbar-title
            class="mt-8 ml-15 mb-5 d-flex align-center credit"
            v-if="
              (this.contracts.insuranceKubun === '' ||
                this.contracts.insuranceKubun === '未加入') &&
              this.contracts.paymentKubun === 'クレジット'
            "
          >
            　➃
            クレジット（お客様にクレジット（スカイプランなど）でご成約頂いた際の手続きです。）
          </v-toolbar-title>
        </v-row>

        <v-row>
          <v-toolbar-title
            class="mt-8 ml-15 mb-5 d-flex align-center credit"
            v-if="
              (this.contracts.insuranceKubun === '当社加入' ||
                this.contracts.insuranceKubun === '他社加入') &&
              this.contracts.paymentKubun === 'クレジット'
            "
          >
            　➄
            クレジット（お客様にクレジット（スカイプランなど）でご成約頂いた際の手続きです。）
          </v-toolbar-title>
        </v-row>

        <v-row class="mt-5">
          <v-col cols="2" class="ml-15">
            <v-select
              @update:modelValue="isCreditChange"
              v-if="this.contracts.paymentKubun === 'クレジット'"
              v-model="credit.creditDocuments"
              label="電子or書面"
              :items="['', '電子', '書面']"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="this.credit.creditDocuments === '電子'"
          >
            <v-checkbox
              @change="CreditDocumentsCompleted"
              v-model="credit.isFillIn"
              label="電子手続き(meats)"
            >
            </v-checkbox>
          </v-col>

          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="this.credit.creditDocuments === '書面'"
          >
            <v-checkbox
              @change="CreditDocumentsCompleted"
              v-model="credit.isFillIn"
              label="ご記入"
            >
            </v-checkbox>
          </v-col>

          <v-col
            cols="2"
            class="mx-1 d-flex align-center"
            v-if="this.credit.creditDocuments === '書面'"
          >
            <v-checkbox
              @change="CreditDocumentsCompleted"
              v-model="credit.isRegisteredSeal"
              label="銀行印"
            >
            </v-checkbox>
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="
              this.credit.creditDocuments === '電子' ||
              this.credit.creditDocuments === '書面'
            "
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="this.credit.creditDocuments === '電子'"
          >
          </v-col>
          <v-col
            cols="2"
            class="mb-6 d-flex align-center"
            v-if="
              this.credit.creditDocuments === '電子' ||
              this.credit.creditDocuments === '書面'
            "
          >
            <div
              class="credit-documents-completed"
              :class="{
                'is-fill-in-completed':
                  this.credit.isFillIn ||
                  (this.credit.isFillIn && this.credit.isRegisteredSeal),
              }"
            >
              完了
            </div>
          </v-col>

          <!-- <v-col cols="2" class="mx-1 credit-completedDate">
          <v-text-field
            :class="{ 'completedDate-input': credit.completedDate != false }"
            type="date"
            v-model="credit.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
        </v-row>

        <v-row>
          <v-col
            cols="1"
            class="mt-3 ml-16 d-flex align-center"
            v-if="
              this.credit.creditDocuments === '電子' ||
              this.credit.creditDocuments === '書面'
            "
          >
            <v-btn
              href="https://www.mazdacr.co.jp/lineup/lineup.html?mode=sky"
              target="_blank"
              density="compact"
              icon="mdi-search-web"
            ></v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-toolbar-title
            class="mt-8 ml-15 mb-5 d-flex deliveryDate"
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
                this.contracts.newCarUsedCarKubun === '中古車') &&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
                this.contracts.normalCarLightCarKubun === '軽自動車') &&
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '銀行ローン' ||
                this.contracts.paymentKubun === '所有権留保') &&
              (this.contracts.insuranceKubun === '当社加入' ||
                this.contracts.insuranceKubun === '他社加入' ||
                this.contracts.insuranceKubun === '未加入')
            "
          >
            　➅
            納車日（ご成約頂いたお車が登録されて２週間後がご納車日の目安となります。）
          </v-toolbar-title>
        </v-row>
        <v-row class="mt-5">
          <v-col
            cols="2"
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
                this.contracts.newCarUsedCarKubun === '中古車') &&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
                this.contracts.normalCarLightCarKubun === '軽自動車') &&
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '銀行ローン' ||
                this.contracts.paymentKubun === '所有権留保') &&
              (this.contracts.insuranceKubun === '当社加入' ||
                this.contracts.insuranceKubun === '他社加入' ||
                this.contracts.insuranceKubun === '未加入')
            "
            class="ml-15"
          >
            <v-text-field
              class="test"
              :class="{
                'completedDate-input': !delivery.deliveryDate,
              }"
              type="date"
              v-model="delivery.deliveryDate"
              label="納車希望日"
            ></v-text-field>
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
                this.contracts.newCarUsedCarKubun === '中古車') &&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
                this.contracts.normalCarLightCarKubun === '軽自動車') &&
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '銀行ローン' ||
                this.contracts.paymentKubun === '所有権留保') &&
              (this.contracts.insuranceKubun === '当社加入' ||
                this.contracts.insuranceKubun === '他社加入' ||
                this.contracts.insuranceKubun === '未加入')
            "
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
                this.contracts.newCarUsedCarKubun === '中古車') &&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
                this.contracts.normalCarLightCarKubun === '軽自動車') &&
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '銀行ローン' ||
                this.contracts.paymentKubun === '所有権留保') &&
              (this.contracts.insuranceKubun === '当社加入' ||
                this.contracts.insuranceKubun === '他社加入' ||
                this.contracts.insuranceKubun === '未加入')
            "
          >
          </v-col>
          <v-col
            cols="2"
            class="mx-1"
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
                this.contracts.newCarUsedCarKubun === '中古車') &&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
                this.contracts.normalCarLightCarKubun === '軽自動車') &&
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '銀行ローン' ||
                this.contracts.paymentKubun === '所有権留保') &&
              (this.contracts.insuranceKubun === '当社加入' ||
                this.contracts.insuranceKubun === '他社加入' ||
                this.contracts.insuranceKubun === '未加入')
            "
          >
          </v-col>

          <v-col
            cols="2"
            class="mb-6 d-flex align-center"
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
                this.contracts.newCarUsedCarKubun === '中古車') &&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
                this.contracts.normalCarLightCarKubun === '軽自動車') &&
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === 'クレジット' ||
                this.contracts.paymentKubun === '銀行ローン' ||
                this.contracts.paymentKubun === '所有権留保') &&
              (this.contracts.insuranceKubun === '当社加入' ||
                this.contracts.insuranceKubun === '他社加入' ||
                this.contracts.insuranceKubun === '未加入')
            "
          >
            <div
              class="delivery-date-completed"
              :class="{
                'is-fill-in-completed': delivery.deliveryDate,
              }"
            >
              完了
            </div>
          </v-col>
        </v-row>
        <v-row
          v-if="
            (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車') &&
            (this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車') &&
            (this.contracts.paymentKubun === '現金' ||
              this.contracts.paymentKubun === 'クレジット' ||
              this.contracts.paymentKubun === '銀行ローン' ||
              this.contracts.paymentKubun === '所有権留保') &&
            (this.contracts.insuranceKubun === '当社加入' ||
              this.contracts.insuranceKubun === '他社加入' ||
              this.contracts.insuranceKubun === '未加入')
          "
        >
          <v-toolbar-title class="mt-8 ml-15 d-flex align-center goal">
            　〇お手続きは以上になります。お時間頂きありがとうございました。
          </v-toolbar-title>
        </v-row>
      </div>
      <div class="whole-bottom"></div>
      <div class="footer"></div>
      <!-- <v-row>
        <v-toolbar-title class="ml-15 d-flex align-center memo">
          　▼メモ
        </v-toolbar-title>
      </v-row> -->

      <!-- <v-row class="mt-5" v-for="(memo, index) in memos" :key="index">
        <v-col>
        {{ index }}
      </v-col>
        <v-col cols="2" class="ml-15">
          <v-text-field
            type="date"
            v-model="memo.recordDate"
            label="メモ日"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field
            v-model="memo.memoField"
            @input="memoField(memo)"
            :counter="10"
            label="メモ"
            required
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
            type="date"
            v-model="memo.promisedDay"
            label="約束日"
          ></v-text-field>
        </v-col>
        <v-col cols="1" class="d-flex align-center" v-if="memos.length >= 2">
          <v-btn
            @click="removeMemo(index)"
            density="compact"
            icon="mdi-close"
          ></v-btn>
        </v-col>
        <v-col
          cols="1"
          class="d-flex align-center"
          v-if="index == memos.length - 1"
        >
          <v-btn @click="addMemo" density="compact" icon="mdi-plus"></v-btn>
        </v-col>
      </v-row> -->

      <!-- 委任状（実印）modal -->
      <v-dialog v-model="poaRegisteredSealModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/委任状（実印）記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- 委任状（認印）modal -->
      <v-dialog v-model="poaStampingModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/委任状（認印）記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- OSS（実印）modal -->
      <v-dialog v-model="ossRegisteredSealModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/OSS（実印）記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- OSS（認印）modal -->
      <v-dialog v-model="ossStampingModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/OSS（認印）記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- 申請依頼書（所有者・使用者）modal -->
      <v-dialog v-model="lightCarDocumentsOwnerAndUserModal" max-width="70%">
        <v-card>
          <img
            class="modal-img"
            src="/申請依頼書（所有者・使用者）記入例.jpg"
          />
        </v-card>
      </v-dialog>
      <!-- 申請依頼書（使用者）modal -->
      <v-dialog v-model="lightCarDocumentsUserModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/申請依頼書（使用者）記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- 保管場所証明申請書modal -->
      <v-dialog v-model="NCgarageVerificationModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/保管場所証明申請書記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- 自認書modal -->
      <v-dialog v-model="selfCertification" max-width="70%">
        <v-card>
          <img class="modal-img" src="/自認書記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- 使用承諾証modal -->
      <v-dialog v-model="ConsentToUseModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/使用承諾証記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- 配置図modal -->
      <v-dialog v-model="arrangementDiagramNameModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/配置図記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- 希望番号伺書modal -->
      <v-dialog v-model="desiredNumberModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/希望番号伺書記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- ETC申込用紙modal -->
      <v-dialog v-model="etcModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/ETC申込用紙記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- ETC2.0申込用紙modal -->
      <v-dialog v-model="etc2Modal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/ETC2.0申込用紙記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- 新車延長保証modal -->
      <v-dialog v-model="newCarExtendedWarrantyModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/延長保証記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- 中古車延長保証modal -->
      <v-dialog v-model="usedCarExtendedWarrantyModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/さわやかプラス記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- メンテナンスパック申込書modal -->
      <v-dialog v-model="maintenancePackModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/メンテナンスパック申込用紙記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- 税申告書modal -->
      <v-dialog v-model="taxDeclarationNameModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/税申告書記入例.jpg" />
        </v-card>
      </v-dialog>
      <div class="whole-bottom"></div>
      <div class="footer"></div>
    </v-app>
  </div>
</template>

<style lang="scss">
.body {
  overflow-x: hidden;
}
.modal-img {
  border: solid 2px #616161;
}
.on-save {
  background: #808080;
  color: #ffffff;
}
.input-list {
  margin-top: 8%;
}
.orderDate {
  color: #ff0000;
}
.userCode {
  color: #ff0000;
}
.credit {
  max-width: 87%;
  background: #e6b422;
  color: #ffffff;
  border-radius: 5px;
}
.credit-completedDate {
  color: #ff0000;
}
.start {
  max-width: 87%;
  background: #808080;
  color: #ffffff;
  border-radius: 5px;
}
.normalCarDocuments {
  max-width: 87%;
  background: #4db56a;
  color: #ffffff;
  border-radius: 5px;
}
.normalCarDocuments-completedDate {
  color: #ff0000;
}
.lightCarDocuments {
  max-width: 87%;
  background: #4db56a;
  color: #ffffff;
  border-radius: 5px;
}
.lightCarDocuments-completedDate {
  color: #ff0000;
}
.normalCarDocumentsGarageVerification {
  max-width: 87%;
  background: #6e6eff;
  color: #ffffff;
  border-radius: 5px;
}
.normalCarDocumentsGarageVerification-completedDate {
  color: #ff0000;
}
.lightCarDocumentsGarageVerification {
  max-width: 87%;
  background: #6e6eff;
  color: #ffffff;
  border-radius: 5px;
}
.lightCarDocumentsGarageVerification-completedDate {
  color: #ff0000;
}
.other-documents {
  max-width: 87%;
  background: #fc9325;
  color: #ffffff;
  border-radius: 5px;
}

.deliveryDate {
  max-width: 87%;
  background: #ff3f3f;
  color: #ffffff;
  border-radius: 5px;
}

.storingMethod-completedDate {
  color: #ff0000;
}

.arrangement-completedDate {
  color: #ff0000;
}

.desiredNumber-completedDate {
  color: #ff0000;
}

.etc-completedDate {
  color: #ff0000;
}

.extendedWarranty-completedDate {
  color: #ff0000;
}

.maintenancePack-completedDate {
  color: #ff0000;
}

.jaf-completedDate {
  color: #ff0000;
}
.insurance {
  max-width: 87%;
  background: #33ccff;
  color: #ffffff;
  border-radius: 5px;
}
.insurance-completedDate {
  color: #ff0000;
}

.taxDeclaration-completedDate {
  color: #ff0000;
}

.delivery-deliveryDate {
  color: #ff0000;
}
.goal {
  max-width: 87%;
  background: #808080;
  color: #ffffff;
  border-radius: 5px;
}
.memo {
  max-width: 87%;
  background: #262626;
  color: #ffffff;
  border-radius: 5px;
}
.whole-bottom {
  margin-bottom: 150px;
}
.explanation {
  background-color: #ffecb8;
  border-radius: 3px;
}
.logo {
  width: 30%;
  height: 100%;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45px;
  background-color: #101010;
}
.complete {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}

.ncgarage-verification-kubun-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.lcgarage-verification-kubun-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.self-certification-consent-to-use-kubun-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.arrangement-diagram-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.desired-number-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.etc-kubun-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.extended-warranty-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.maintenance-pack-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.jaf-payment-kubun-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.tax-declaration-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.insurance-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.sky-plus-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.insurance-completed2 {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.credit-documents-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.delivery-date-completed {
  width: 100px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background-color: #cccccc;
  color: #ffffff;
  text-align: center;
}
.completedDate-input {
  color: #ff0000;
}
.is-fill-in-completed {
  background-color: #ff0000;
}
</style>
