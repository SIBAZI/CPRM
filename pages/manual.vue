<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      //成約時登録
      isOpenModal: false,
      // modalImgPath: "",
      // poaRegisteredSealModal: false, //委任状（実印）モーダル
      // poaStampingModal: false, //委任状（認印）モーダル
      // ossRegisteredSealModal: false, //OSS（実印）モーダル
      // ossStampingModal: false, //OSS委任状(認印)モーダル
      // lightCarDocumentsOwnerAndUserModal: false, //申請依頼書(所有者・使用者）モーダル
      // lightCarDocumentsUserModal: false, //申請依頼書(使用者）モーダル
      // NCgarageVerificationModal: false, //保管場所証明申請書モーダル
      // LCgarageVerificationKubun: false, //保管場所届出書モーダル
      // selfCertification: false, //自認書モーダル
      // ConsentToUseModal: false, //使用承諾証モーダル
      // arrangementDiagramNameModal: false, //配置図モーダル
      desiredNumberModal: false, //希望番号伺書モーダル
      // etcModal: false, //ETC申込用紙モーダル
      // etc2Modal: false, //ETC2.0申込用紙モーダル
      // newCarExtendedWarrantyModal: false, //新車延長保証モーダル
      usedCarExtendedWarrantyModal: false, //中古車延長保証モーダル
      // maintenancePackModal: false, //メンテナンスパック申込用紙記入例
      // taxDeclarationNameModal: false, //税申告書記入例

      //買取・下取
      tradeInPurchaseModal: false,//買取下取モーダル
      inheritanceDivisionAgreementModal:false,//遺産分割協議書モーダル
      compulsoryAutomobileLiabilityInsuranceCertificateModal:false,//自賠責保険証モーダル
      purchaseDetailsModal:false,//買取明細書モーダル
      confirmationOfTransferDestinationModal:false,//振込先確認書モーダル
      automobileLiabilityInsuranceApprovalClaimFormModal:false,//自賠責承認請求書モーダル
      noticeOfAssignmentOfClaimModal:false,//債権譲渡通知書モーダル
      taxPaymentSlipModal:false,//税支払伺書モーダル

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
        creditTp: "", //クレジット種類
        creditDocuments: "", //クレジット書類
        electronicProcedures: false,
        isFillIn: false, //ご記入
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
        completedDate: "", //完了日
      },

      delivery: {
        deliveryDate: "", //納車予定日
      },

      //下取・買取
      tradeInPurchase: {
        tradeInPurchaseKubun: "", //下取・買取
        normalCarLightCarKubun: "", //普通車・軽自動車区分
        nameChangeDeletionKubun: "", //名変・抹消区分
        ownershipKubun: "", //所有権区分
      },

      tradeInCarAndOtherConfirma: {
        isCorporateVehicles: false, //法人車
        isDeathOfPerson: false, //本人逝去
      },
      passedAwayRequiredDocuments: {
        purchasePriceKubun: "", //買取価格
        inheritanceDivisionAgreement: "遺産分割協議書",
        familyRegister: "戸籍謄本",
        revisedOriginalFamilyRegister: "改正原戸籍謄本",
      },

      purchaseDocuments: {
        purchaseDetails: "買取明細書",
        copyOfIdentityDocument: "本人確認書類コピー",
        copyOfIdentityDocumentStorage: false,//本人確認書類コピーお預かり
        confirmationOfTransferDestination: "振込先確認書",
      },

      requiredDocumentsForRegularCars: {
        inheritanceDivisionAgreement: "遺産分割協議書",
        inheritanceDivisionAgreementIsFillIn: false,//遺産分割協議書ご署名
        inheritanceDivisionAgreementIsOfficialSeal: false,//遺産分割協議書実印
        inheritanceDivisionAgreementSealCertificateOfRepresentativeHeir: false,//遺産分割協議書代表相続人の印鑑証明
        familyRegister: "戸籍謄本",
        familyRegisterStorage: false,//戸籍謄本お預かり
        revisedOriginalFamilyRegister: "改正原戸籍謄本",
        revisedOriginalFamilyRegisterStorage: false,//改正原戸籍謄本お預かり
        powerOfAttorney: "委任状",
        powerOfAttorneyIsFillIn: false,//委任状ご記入
        powerOfAttorneyIsOfficialSeal: false,//委任状実印
        powerOfAttorneyStorage: false,//委任状お預かり
        powerOfAttorneySealCertificateOfRepresentativeHeir: false,//委任状印鑑証明
        transferCertificate: "譲渡証明書",
        transferCertificateIsFillIn: false,//譲渡証明書ご記入
        transferCertificateIsOfficialSeal: false,//譲渡証明書実印
        transferCertificateStorage: false,//譲渡証明書お預かり
        transferCertificateSealCertificateOfRepresentativeHeir: false,//譲渡証明書印鑑証明
        taxPaymentCertificate: "納税証明書",
        taxPaymentCertificateStorage: false,//納税証明書お預かり
        motorVehicleTaxPaymentSlip: "自動車税支払伺書",
        noticeOfAssignmentOfClaim: "債権譲渡通知書",
        connectedServiceSubscriptionStatus: '',
        connectedServiceCancellationDate: '',//コネクティッドサービス解約日
      },
      requiredDocumentsForLightVehicles: {
        isFillIn: false, //ご記入
        isStamping: false, //認印
        residentCard: false, //住民票
        automobileLiabilityInsuranceApprovalClaimForm: "自賠責承認請求書",
        applicationRequestForm: "申請依頼書",
        applicationRequestFormStorage: false,//申請依頼書お預かり
        taxAbolition1: "税申告書",
        taxAbolition2: "納税済証",
        taxAbolition3: "税廃",
        letterOfConsent: "軽自動車承諾書",
        letterOfConsentStorage: false,//軽自動車承諾書お預かり
      },
      tradeInPurchaseCommonRequiredDocuments: {
        ownershipReleaseRequest: "所有権解除依頼",
        purchaseInvoiceShippingDestinationContactSlip: "仕入明細書発送先連絡票",
        recyclingTicket: "リサイクル券",
        vehicleInspectionCertificate: "車検証",
        vehicleInspectionCertificateStorage: false,//車検証お預かり
        compulsoryAutomobileLiabilityInsuranceCertificate: "自賠責保険証",
        compulsoryAutomobileLiabilityInsuranceCertificateStorage: false,//車検証お預かり
        automobileLiabilityInsuranceApprovalClaimForm: "自賠責承認請求書",
        automobileLiabilityInsuranceApprovalClaimFormStorage: false,//自賠責承認請求書お預かり
        purchaseTradeInAgreement: "買取・下取同意書",
        carCheckSheet: "カーチェックシート",
        purchaseInvoiceShippingDestinationContactSlipPreparation: false, //準備
        insuranceIncluded: "",//自動車保険付帯
        cabinetInput: '',//キャビネット入力
        dateOfCompletionOfDocumentSubmissionProcedure: '',//書類提出・手続き完了
      },
      purchase: {},

      // memos: [
      //   {
      //     recordDate: "", //記念日
      //     memoField: "", //メモ
      //     promisedDay: "", //約束日
      //   },
      // ],
    };
  },
  methods: {
    openModal(imgName) {
      this.modalImgPath = "/" + imgName;
      this.isOpenModal = true;
    },
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
    insuranceImg() {
      window.open("/簡易事故受付カード.pdf", "_blank");
    },
    tradeInPurchaseImg() {
      window.open("/下取・買取書類確認書.pdf", "_blank");
    },
    inheritanceDivisionAgreementImg() {
      window.open("/遺産分割協議書.pdf", "_blank");
    },
    transferCertificateImg() {
      window.open("/譲渡証明書.pdf", "_blank");
    },
    noticeOfAssignmentOfClaimImg() {
      window.open("/債権譲渡通知書.pdf", "_blank");
    },
    purchaseTradeInAgreementImg() {
      window.open("/買取下取同意書.pdf", "_blank");
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
      this.credit.creditTp = false;
      this.delivery.deliveryDate = "";
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
      this.delivery.deliveryDate = "";
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
      this.delivery.deliveryDate = "";
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
      this.credit.creditTp = "";
      this.delivery.deliveryDate = "";
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
      this.credit.electronicProcedures = false;
      this.credit.isFillIn = "";
      this.credit.isRegisteredSeal = false;
      this.credit.completedDate = false;
    },
    isJocInsuranceCompanyChange() {
      this.insurance.joiningProcedure = false;
      this.insurance.skyPlusExplanation = false;
    },


    tradeInPurchaseKubunChange() {
      this.tradeInCarAndOtherConfirma.isCorporateVehicles = false;
      this.tradeInCarAndOtherConfirma.isDeathOfPerson = false;
      this.passedAwayRequiredDocuments.purchasePriceKubun = '';
      this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded = '';
      this.requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus = '';
      this.tradeInPurchaseCommonRequiredDocuments.purchaseInvoiceShippingDestinationContactSlipPreparation = '';
      this.requiredDocumentsForRegularCars.familyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.revisedOriginalFamilyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsFillIn= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneySealCertificateOfRepresentativeHeir= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsFillIn= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.transferCertificateSealCertificateOfRepresentativeHeir= false;
      this.tradeInPurchaseCommonRequiredDocuments.vehicleInspectionCertificateStorage= false;
      this.compulsoryAutomobileLiabilityInsuranceCertificateStorage= false;
      this.tradeInPurchaseCommonRequiredDocuments.automobileLiabilityInsuranceApprovalClaimFormStorage= false;
      this.requiredDocumentsForRegularCars.taxPaymentCertificateStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyStorage= false;
      this.requiredDocumentsForRegularCars.transferCertificateStorage= false;
      this.requiredDocumentsForRegularCars.applicationRequestFormStorage= false;
      this.requiredDocumentsForLightVehicles.letterOfConsentStorage= false;
      this.copyOfIdentityDocumentStorage= false;
    },
    normalCarLightCarKubunChange() {
      this.tradeInCarAndOtherConfirma.isCorporateVehicles = false;
      this.tradeInCarAndOtherConfirma.isDeathOfPerson = false;
      this.passedAwayRequiredDocuments.purchasePriceKubun = '';
      this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded = '';
      this.requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus = '';
      this.tradeInPurchaseCommonRequiredDocuments.purchaseInvoiceShippingDestinationContactSlipPreparation = '';
      this.tradeInPurchaseCommonRequiredDocuments.purchaseInvoiceShippingDestinationContactSlipPreparation = '';
      this.requiredDocumentsForRegularCars.familyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.revisedOriginalFamilyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsFillIn= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneySealCertificateOfRepresentativeHeir= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsFillIn= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.transferCertificateSealCertificateOfRepresentativeHeir= false;
      this.tradeInPurchaseCommonRequiredDocuments.vehicleInspectionCertificateStorage= false;
      this.compulsoryAutomobileLiabilityInsuranceCertificateStorage= false;
      this.tradeInPurchaseCommonRequiredDocuments.automobileLiabilityInsuranceApprovalClaimFormStorage= false;
      this.requiredDocumentsForRegularCars.taxPaymentCertificateStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyStorage= false;
      this.requiredDocumentsForRegularCars.transferCertificateStorage= false;
      this.requiredDocumentsForRegularCars.applicationRequestFormStorage= false;
      this.requiredDocumentsForLightVehicles.letterOfConsentStorage= false;
      this.copyOfIdentityDocumentStorage= false;
    },
    nameChangeDeletionKubunChange() {
      this.tradeInCarAndOtherConfirma.isCorporateVehicles = false;
      this.tradeInCarAndOtherConfirma.isDeathOfPerson = false;
      this.passedAwayRequiredDocuments.purchasePriceKubun = '';
      this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded = '';
      this.requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus = '';
      this.tradeInPurchaseCommonRequiredDocuments.purchaseInvoiceShippingDestinationContactSlipPreparation = '';
      this.tradeInPurchaseCommonRequiredDocuments.purchaseInvoiceShippingDestinationContactSlipPreparation = '';
      this.requiredDocumentsForRegularCars.familyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.revisedOriginalFamilyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsFillIn= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneySealCertificateOfRepresentativeHeir= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsFillIn= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.transferCertificateSealCertificateOfRepresentativeHeir= false;
      this.tradeInPurchaseCommonRequiredDocuments.vehicleInspectionCertificateStorage= false;
      this.compulsoryAutomobileLiabilityInsuranceCertificateStorage= false;
      this.tradeInPurchaseCommonRequiredDocuments.automobileLiabilityInsuranceApprovalClaimFormStorage= false;
      this.requiredDocumentsForRegularCars.taxPaymentCertificateStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyStorage= false;
      this.requiredDocumentsForRegularCars.transferCertificateStorage= false;
      this.requiredDocumentsForRegularCars.applicationRequestFormStorage= false;
      this.requiredDocumentsForLightVehicles.letterOfConsentStorage= false;
      this.copyOfIdentityDocumentStorage= false;
    },
    ownershipKubunChange() {
      this.tradeInCarAndOtherConfirma.isCorporateVehicles = false;
      this.tradeInCarAndOtherConfirma.isDeathOfPerson = false;
      this.passedAwayRequiredDocuments.purchasePriceKubun = '';
      this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded = '';
      this.requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus = '';
      this.tradeInPurchaseCommonRequiredDocuments.purchaseInvoiceShippingDestinationContactSlipPreparation = '';
      this.tradeInPurchaseCommonRequiredDocuments.purchaseInvoiceShippingDestinationContactSlipPreparation = '';
      this.requiredDocumentsForRegularCars.familyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.revisedOriginalFamilyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsFillIn= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneySealCertificateOfRepresentativeHeir= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsFillIn= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.transferCertificateSealCertificateOfRepresentativeHeir= false;
      this.tradeInPurchaseCommonRequiredDocuments.vehicleInspectionCertificateStorage= false;
      this.compulsoryAutomobileLiabilityInsuranceCertificateStorage= false;
      this.tradeInPurchaseCommonRequiredDocuments.automobileLiabilityInsuranceApprovalClaimFormStorage= false;
      this.requiredDocumentsForRegularCars.taxPaymentCertificateStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyStorage= false;
      this.requiredDocumentsForRegularCars.transferCertificateStorage= false;
      this.requiredDocumentsForRegularCars.applicationRequestFormStorage= false;
      this.requiredDocumentsForLightVehicles.letterOfConsentStorage= false;
      this.copyOfIdentityDocumentStorage= false;
    },
    tradeInPurchaseClear() {
      this.tradeInPurchase.tradeInPurchaseKubun = '';
      this.tradeInPurchase.normalCarLightCarKubun = '';
      this.tradeInPurchase.nameChangeDeletionKubun = '';
      this.tradeInPurchase.ownershipKubun = '';
      this.passedAwayRequiredDocuments.purchasePriceKubun = '';
      this.tradeInCarAndOtherConfirma.isCorporateVehicles = false;
      this.tradeInCarAndOtherConfirma.isDeathOfPerson = false;
      this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded = '';
      this.tradeInPurchaseCommonRequiredDocuments.cabinetInput = '';
      this.tradeInPurchaseCommonRequiredDocuments.dateOfCompletionOfDocumentSubmissionProcedure = '';
      this.requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus = '';
      this.requiredDocumentsForRegularCars.connectedServiceCancellationDate = '';
      this.requiredDocumentsForRegularCars.familyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.revisedOriginalFamilyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsFillIn= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneySealCertificateOfRepresentativeHeir= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsFillIn= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.transferCertificateSealCertificateOfRepresentativeHeir= false;
      this.tradeInPurchaseCommonRequiredDocuments.vehicleInspectionCertificateStorage= false;
      this.compulsoryAutomobileLiabilityInsuranceCertificateStorage= false;
      this.tradeInPurchaseCommonRequiredDocuments.automobileLiabilityInsuranceApprovalClaimFormStorage= false;
      this.requiredDocumentsForRegularCars.taxPaymentCertificateStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyStorage= false;
      this.requiredDocumentsForRegularCars.transferCertificateStorage= false;
      this.requiredDocumentsForRegularCars.applicationRequestFormStorage= false;
      this.requiredDocumentsForLightVehicles.letterOfConsentStorage= false;
      this.copyOfIdentityDocumentStorage= false;
    },
    isCorporateVehiclesChange() {
      this.tradeInPurchaseCommonRequiredDocuments.purchaseInvoiceShippingDestinationContactSlipPreparation = '';
    },
    isDeathOfPersonChange() {
      this.passedAwayRequiredDocuments.purchasePriceKubun = '';
      this.requiredDocumentsForRegularCars.inheritanceDivisionAgreementIsFillIn = false;
      this.requiredDocumentsForRegularCars.inheritanceDivisionAgreementIsOfficialSeal = false;
      this.requiredDocumentsForRegularCars.inheritanceDivisionAgreementSealCertificateOfRepresentativeHeir = false;
      this.requiredDocumentsForRegularCars.familyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.revisedOriginalFamilyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsFillIn= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneySealCertificateOfRepresentativeHeir= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsFillIn= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.transferCertificateSealCertificateOfRepresentativeHeir= false;
    },
    purchasePriceKubunChange() {
      this.requiredDocumentsForRegularCars.inheritanceDivisionAgreementIsFillIn = false;
      this.requiredDocumentsForRegularCars.inheritanceDivisionAgreementIsOfficialSeal = false;
      this.requiredDocumentsForRegularCars.inheritanceDivisionAgreementSealCertificateOfRepresentativeHeir = false;
      this.requiredDocumentsForRegularCars.familyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.revisedOriginalFamilyRegisterStorage= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsFillIn= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneyIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.powerOfAttorneySealCertificateOfRepresentativeHeir= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsFillIn= false;
      this.requiredDocumentsForRegularCars.transferCertificateIsOfficialSeal= false;
      this.requiredDocumentsForRegularCars.transferCertificateSealCertificateOfRepresentativeHeir= false;
    },
    insuranceIncludedChange() {
      this.tradeInPurchaseCommonRequiredDocuments.cabinetInput = '';
      this.tradeInPurchaseCommonRequiredDocuments.dateOfCompletionOfDocumentSubmissionProcedure = '';
    },
    connectedServiceSubscriptionStatusChange() {
      this.requiredDocumentsForRegularCars.connectedServiceCancellationDate = '';
    },





    // console.log(this.contracts.normalCarLightCarKubun);
    // console.log(this.normalCarDocuments);
    // console.log(event);
  },
};
</script>

<template>
  <div>
    <v-app class="body">
      <div>
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
        <v-col cols="2" class=" orderDate">
          <v-text-field
            :class="{
              'completedDate-input': contracts.orderDate != false,
            }"
            v-model="contracts.orderDate"
            type="date"
            label="受注日(必須)"
          ></v-text-field>
        </v-col>

        <v-col cols="2" class=" userCode">
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

        <v-col cols="2" class="">
          <v-combobox
            v-model="contracts.carModel"
            label="成約車種"
            :items="[]"
            variant="outlined"
          ></v-combobox>
        </v-col>

        <v-col cols="2" class="">
          <v-select
            v-model="contracts.storeKubun"
            label="店舗"
            :items="['', 'A店', 'B店']"
            variant="outlined"
          ></v-select>
        </v-col>

        <v-col cols="2" class="">
          <v-combobox
            v-model="contracts.managerName"
            label="担当者名"
            :items="[]"
            variant="outlined"
          ></v-combobox>
        </v-col>
      </v-row> -->

        <div>
          <v-row class="logo-top" v-if="this.start.startKubun === ''">
            <v-col class="logo-div">
              <img
                class="logo"
                src="/アンフィニ広島手続きマニュアルロゴ.jpg"
                loading="eager"
              />
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="this.start.startKubun === ''"
            >
              <v-btn
                @click="openModal('注意書き.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
          </v-row>
          <v-row class="mt-12 justify-center">
            <v-col cols="3" class="">
              <v-select
                v-model="start.startKubun"
                label="手続き内容"
                :items="[
                  '',
                  '成約時登録',
                  '下取・買取',
                  '納車準備',
                  '納車',
                  '一般登録代行',
                ]"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col
              cols="1"
              v-if="this.start.startKubun === '下取・買取'"
            >
              <v-btn
                class="mt-4 ml-6"
                @click="tradeInPurchaseModal = true"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              v-if="this.start.startKubun === '下取・買取'"
            >
            <v-btn
                class="mt-4 "
                @click="tradeInPurchaseImg"
                density="compact"
                icon="mdi-printer"
                ></v-btn>
            </v-col>
            <v-col cols="2" class="" > </v-col>
            <v-col cols="2" class=""> </v-col>
            <v-col cols="1" class=""> </v-col>
            <v-col 
              cols="1" 
              class=""
              v-if="this.start.startKubun === ''||
                    this.start.startKubun === '成約時登録'||
                    this.start.startKubun === '納車準備'||
                    this.start.startKubun === '納車'||
                    this.start.startKubun === '一般登録代行'
                   "
              > 
            </v-col>
            <v-col 
              cols="1" 
              class=""
              v-if="this.start.startKubun === ''||
                    this.start.startKubun === '成約時登録'||
                    this.start.startKubun === '納車準備'||
                    this.start.startKubun === '納車'||
                    this.start.startKubun === '一般登録代行'
                   "
              > 
            </v-col>
          </v-row>
          <v-row v-if="this.start.startKubun === '納車準備'">
            <p class="supporting-sentences">　※現在作成中</p>
          </v-row>
          <v-row v-if="this.start.startKubun === '納車'">
            <p class="supporting-sentences">　※現在作成中</p>
          </v-row>
          <v-row v-if="this.start.startKubun === '一般登録代行'">
            <p class="supporting-sentences">　※現在作成中（LastUpdated.2024.12.15.AM03:18）</p>
          </v-row>
        </div>
        <div v-if="this.start.startKubun === '成約時登録'">
          <v-row>
            <v-toolbar-title class="mt-5 start">
              　▼　ここからはご成約頂いたお車の登録手続きになります。
            </v-toolbar-title>
          </v-row>
          <v-row>
            <p class="mt-9 supporting-sentences">　ご成約頂いたお車は、</p>
          </v-row>

          <v-row class="mt-9 justify-center">
            <v-col cols="2" class="">
              <v-select
                @update:modelValue="newCarUsedCarKubunChange"
                v-model="contracts.newCarUsedCarKubun"
                label="（１）新車or中古車"
                :items="['', '新車', '中古車']"
                variant="outlined"
              ></v-select>
            </v-col>

            <v-col cols="2" class="">
              <v-select
                @update:modelValue="normalCarLightCarKubunChange"
                v-model="contracts.normalCarLightCarKubun"
                label="（２）普通車or軽自動車"
                :items="['', '普通車', '軽自動車']"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="2" class="">
              <v-select
                @update:modelValue="paymentKubunChange"
                v-model="contracts.paymentKubun"
                label="（３）支払方法"
                :items="['', '現金', 'クレジット', '銀行ローン', '所有権留保']"
                variant="outlined"
              ></v-select>
            </v-col>

            <!-- <v-col cols="2" class="">
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
                label="（４）保険加入希望先"
                :items="['', '当社加入', '他社加入', '未加入']"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="2" class="mt-2">
              <v-btn class="ml-16" @click="rattocClear"> clear </v-btn>
            </v-col>
            <!-- <v-col cols="2" class="mt-2 ">
              <v-btn @click="openModal('委任状（実印）記入例.jpg')">
                test
              </v-btn>
            </v-col>
            <v-col cols="2" class="mt-2 ">
              <v-btn
                @click="openModal('申請依頼書（所有者・使用者）記入例.jpg')"
              >
                test
              </v-btn>
            </v-col> -->
          </v-row>

          <v-row
            v-if="
              this.contracts.newCarUsedCarKubun === '中古車' &&
              this.contracts.normalCarLightCarKubun === '普通車'
            "
          >
            <v-toolbar-title class="d-flex align-center normalCarDocuments">
              　〇　委任状（ご成約頂いたお車の登録、検査手続きを代行させて頂く手続きです。）
            </v-toolbar-title>
          </v-row>
          <v-row
            class="mt-10 justify-center"
            v-if="
              this.contracts.newCarUsedCarKubun === '中古車' &&
              this.contracts.normalCarLightCarKubun === '普通車'
            "
          >
            <v-col cols="2" class="">
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
              class=""
              v-if="this.normalCarDocuments.poaKubun === '委任状'"
            >
              <v-checkbox v-model="normalCarDocuments.isFillIn" label="ご記入">
              </v-checkbox>
            </v-col>
            <v-col cols="2" class="" v-if="this.contracts.paymentKubun === ''">
            </v-col>
            <v-col cols="2" class="">
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

            <v-col cols="2" class="">
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
              class="mt-1"
            >
              <div
                class="complete ml-15"
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
          class=" normalCarDocuments-completedDate"
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
            <p class="explanation">
              ・現金でのお支払いの場合、お車の所有者はお客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。　<br />
              <br />
              ！お車の使用者が所有者と別の場合、使用者様の<b>委任状（認印）</b>がもう１枚必要になります。　
            </p>
          </v-row>
          <!-- <v-row>
            <ExplanationText :number="1">
              ・現金でのお支払いの場合、お車の所有者はお客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。
            </ExplanationText>
          </v-row> -->
          <v-row
            v-if="
              this.contracts.newCarUsedCarKubun === '中古車' &&
              this.contracts.normalCarLightCarKubun === '普通車' &&
              this.contracts.paymentKubun === 'クレジット' &&
              this.normalCarDocuments.poaKubun === '委任状'
            "
          >
            <p class="explanation">
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
            <p class="explanation">
              ・銀行ローンでのお支払いの場合、お車の所有者はお客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。　<br />
              <br />
              ！お車の使用者が所有者と別の場合、使用者様の<b>委任状（認印）</b>がもう１枚必要になります。　
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
            <p class="explanation">
              ・所有権留保の場合、<b>認印</b>と<b>住民票</b>が必要となります。　
            </p>
          </v-row>

          <v-row class="icon-ml">
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
              <v-btn
                @click="openModal('委任状（実印）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
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
              <v-btn
                @click="openModal('委任状（認印）記入例.jpg')"
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
              <v-btn
                @click="poaImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
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
              <v-btn
                @click="poaImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>
          </v-row>

          <v-row
            v-if="
              this.contracts.newCarUsedCarKubun === '新車' &&
              this.contracts.normalCarLightCarKubun === '普通車'
            "
          >
            <v-toolbar-title class="d-flex align-center normalCarDocuments">
              　〇　委任状・OSS委任状（ご成約頂いたお車の登録、検査手続きを代行させて頂く手続きです。）
            </v-toolbar-title>
          </v-row>
          <v-row
            class="mt-10 justify-center"
            v-if="
              this.contracts.newCarUsedCarKubun === '新車' &&
              this.contracts.normalCarLightCarKubun === '普通車'
            "
          >
            <v-col cols="2" class="">
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
              class=""
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
            <v-col
              cols="2"
              class=""
              v-if="this.normalCarDocuments.poaOssKubun === ''"
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="this.normalCarDocuments.poaOssKubun === ''"
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.contracts.newCarUsedCarKubun === '新車' &&
                this.contracts.normalCarLightCarKubun === '普通車' &&
                this.contracts.paymentKubun === '' &&
                (this.normalCarDocuments.poaOssKubun === '委任状' ||
                  this.normalCarDocuments.poaOssKubun === 'OSS委任状')
              "
            >
            </v-col>

            <v-col cols="2" class="">
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

            <v-col cols="2" class="">
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
              class="mt-1"
            >
              <div
                class="complete ml-15"
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
          class=" normalCarDocuments-completedDate"
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
            <p class="explanation">
              ・現金でのお支払いの場合、お車の所有者お客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。　<br />
              <br />
              ！お車の使用者が所有者と別の場合、使用者様の<b>委任状（認印）</b>がもう１枚必要になります。　<br />
              <br />
              　ワンストップサービス（OSS）は、自動車を保有するために必要となる手続きと税金や手数料の納付を　<br />
              　インターネット上で一括して行うことを可能とした国土交通省が提供しているサービスです。　
              　<br />
            </p>
          </v-row>
          <v-row
            v-if="
              this.contracts.newCarUsedCarKubun === '新車' &&
              this.contracts.paymentKubun === 'クレジット' &&
              this.normalCarDocuments.poaOssKubun === 'OSS委任状'
            "
          >
            <p class="explanation">
              ・クレジットでのお支払いの場合、<b>認印</b>と<b>住民票</b>が必要となります。　<br />
              　<br />
              　ワンストップサービス（OSS）は、自動車を保有するために必要となる手続きと税金や手数料の納付を　<br />
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
            <p class="explanation">
              ・銀行ローンでのお支払いの場合、お車の所有者はお客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。　<br />
              <br />
              ！お車の使用者が所有者と別の場合、使用者様の<b>委任状（認印）</b>がもう１枚必要になります。　<br />
              <br />
              　ワンストップサービス（OSS）は、自動車を保有するために必要となる手続きと税金や手数料の納付を　<br />
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
            <p class="explanation">
              ・所有権留保の場合、<b>認印</b>と<b>住民票</b>が必要となります。　<br />
              　<br />
              　ワンストップサービス（OSS）は、自動車を保有するために必要となる手続きと税金や手数料の納付を　<br />
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
            <p class="explanation">
              ・現金でのお支払いの場合、お車の所有者はお客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。　<br />
              <br />
              ！お車の使用者が所有者と別の場合、使用者様の<b>委任状（認印）</b>がもう１枚必要になります。　<br />
              <br />
              　最近ではワンストップサービス（OSS）を使用したお車の登録が主流ですが、　<br />
              　車の登録日を急ぎたい（納車日を急ぎたい）場合などにOSSでの登録を使用しない場合があります。　
            </p>
          </v-row>
          <v-row
            v-if="
              this.contracts.newCarUsedCarKubun === '新車' &&
              this.contracts.paymentKubun === 'クレジット' &&
              this.normalCarDocuments.poaOssKubun === '委任状'
            "
          >
            <p class="explanation">
              ・クレジットでのお支払いの場合、<b>認印</b>と<b>住民票</b>が必要となります。　<br />
              　<br />
              　最近ではワンストップサービス（OSS）を使用したお車の登録が主流ですが、　<br />
              　車の登録日を急ぎたい（納車日を急ぎたい）場合などにOSSでの登録を使用しない場合があります。　
            </p>
          </v-row>

          <v-row
            v-if="
              this.contracts.newCarUsedCarKubun === '新車' &&
              this.contracts.paymentKubun === '銀行ローン' &&
              this.normalCarDocuments.poaOssKubun === '委任状'
            "
          >
            <p class="explanation">
              ・銀行ローンでのお支払いの場合、お車の所有者はお客様になりますので<b>実印</b>と<b>印鑑証明</b>が必要となります。　<br />
              <br />
              ！お車の使用者が所有者と別の場合、使用者様の<b>委任状（認印）</b>がもう１枚必要になります。　<br />
              <br />
              　最近ではワンストップサービス（OSS）を使用したお車の登録が主流ですが、　<br />
              　車の登録日を急ぎたい（納車日を急ぎたい）場合などにOSSでの登録を使用しない場合があります。　
            </p>
          </v-row>
          <v-row
            v-if="
              this.contracts.newCarUsedCarKubun === '新車' &&
              this.contracts.paymentKubun === '所有権留保' &&
              this.normalCarDocuments.poaOssKubun === '委任状'
            "
          >
            <p class="explanation">
              ・所有権留保の場合、<b>認印</b>と<b>住民票</b>が必要となります。　<br />
              　<br />
              　最近ではワンストップサービス（OSS）を使用したお車の登録が主流ですが、　<br />
              　車の登録日を急ぎたい（納車日を急ぎたい）場合などにOSSでの登録を使用しない場合があります。　
            </p>
          </v-row>

          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === '銀行ローン') &&
                this.normalCarDocuments.poaOssKubun === 'OSS委任状'
              "
            >
              <v-btn
                @click="openModal('OSS（実印）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
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
              <v-btn
                @click="openModal('OSS（認印）記入例.jpg')"
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
              <v-btn
                @click="ossImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
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
              <v-btn
                @click="ossImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
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
                href="https://www.oss.mlit.go.jp/portal/beginner/osstowa/index.html"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
          </v-row>

          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === '銀行ローン') &&
                this.normalCarDocuments.poaOssKubun === '委任状'
              "
            >
              <v-btn
                @click="openModal('委任状（実印）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
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
              <v-btn
                @click="openModal('委任状（認印）記入例.jpg')"
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
              <v-btn
                @click="poaImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
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
              <v-btn
                @click="poaImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-toolbar-title
              class="d-flex align-center lightCarDocuments"
              v-if="
                (this.contracts.newCarUsedCarKubun === '新車' ||
                  this.contracts.newCarUsedCarKubun === '中古車') &&
                this.contracts.normalCarLightCarKubun === '軽自動車'
              "
            >
              　〇　申請依頼書（お車の登録、検査手続きを代行させて頂く手続きです。）
            </v-toolbar-title>
          </v-row>

          <v-row
            class="mt-10 justify-center"
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
                this.contracts.newCarUsedCarKubun === '中古車') &&
              this.contracts.normalCarLightCarKubun === '軽自動車'
            "
          >
            <v-col cols="2" class="">
              <v-combobox
                @update:modelValue="lightCarDocumentsKubunChange"
                v-model="lightCarDocuments.lightCarDocumentsKubun"
                label=""
                :items="[]"
                variant="outlined"
                readonly
              ></v-combobox>
            </v-col>

            <v-col cols="2" class="">
              <v-checkbox
                @change="lightCarDocumentsKubunCompleted"
                v-model="lightCarDocuments.isFillIn"
                label="ご記入"
              >
              </v-checkbox>
            </v-col>
            <v-col cols="2" class="">
              <v-checkbox
                @change="lightCarDocumentsKubunCompleted"
                v-model="lightCarDocuments.isStamping"
                label="認印"
              >
              </v-checkbox>
            </v-col>
            <v-col cols="2" class="">
              <v-checkbox
                @change="lightCarDocumentsKubunCompleted"
                v-model="lightCarDocuments.isResidentCard"
                label="住民票"
              >
              </v-checkbox>
            </v-col>
            <v-col
              v-if="
                (this.contracts.newCarUsedCarKubun === '新車' ||
                  this.contracts.newCarUsedCarKubun === '中古車') &&
                this.contracts.normalCarLightCarKubun === '軽自動車'
              "
              cols="2"
              class="mt-1"
            >
              <div
                class="complete ml-15"
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
          class=" lightCarDocuments-completedDate"
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
          class=" lightCarDocuments-completedDate"
          v-if="this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'"
        >
          <v-btn @click="aaaaaaaa" density="compact" icon="mdi-printer"></v-btn>
        </v-col> -->
          </v-row>
          <v-row
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
                this.contracts.newCarUsedCarKubun === '中古車') &&
              this.contracts.normalCarLightCarKubun === '軽自動車'
            "
          >
            <p class="explanation">
              ・軽自動車の場合、<b>認印</b>と<b>住民票</b>が必要となります。　
            </p>
          </v-row>
          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.contracts.normalCarLightCarKubun === '軽自動車' &&
                this.lightCarDocuments.lightCarDocumentsKubun ===
                  '申請依頼書' &&
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === '銀行ローン')
              "
            >
              <v-btn
                @click="openModal('申請依頼書（所有者・使用者）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.contracts.normalCarLightCarKubun === '軽自動車' &&
                this.lightCarDocuments.lightCarDocumentsKubun ===
                  '申請依頼書' &&
                (this.contracts.paymentKubun === 'クレジット' ||
                  this.contracts.paymentKubun === '所有権留保')
              "
            >
              <v-btn
                @click="openModal('申請依頼書（使用者）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.contracts.normalCarLightCarKubun === '軽自動車' &&
                this.lightCarDocuments.lightCarDocumentsKubun ===
                  '申請依頼書' &&
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
                this.lightCarDocuments.lightCarDocumentsKubun ===
                  '申請依頼書' &&
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
              class="mt-5 d-flex align-center normalCarDocumentsGarageVerification"
              v-if="
                this.normalCarDocuments.poaOssKubun === '委任状' ||
                (this.contracts.newCarUsedCarKubun === '中古車' &&
                  this.contracts.normalCarLightCarKubun === '普通車') ||
                this.normalCarDocuments.poaOssKubun === 'OSS委任状'
              "
            >
              　〇　車庫証明（ご成約頂いたお車の保管場所を警察署に届け出するための手続きです。）
            </v-toolbar-title>
          </v-row>
          <v-row>
            <v-toolbar-title
              class="mt-5 d-flex align-center lightCarDocumentsGarageVerification"
              v-if="
                (this.contracts.newCarUsedCarKubun === '新車' ||
                this.contracts.newCarUsedCarKubun === '中古車')&&
                (this.contracts.normalCarLightCarKubun === '軽自動車')"
            >
              　〇　車庫証明（ご成約頂いたお車の保管場所を警察署に届け出するための手続きです。）
            </v-toolbar-title>
          </v-row>
          <v-row
            class="mt-10 justify-center"
            v-if="
              this.normalCarDocuments.poaOssKubun === '委任状' ||
              (this.contracts.newCarUsedCarKubun === '中古車' &&
                this.contracts.normalCarLightCarKubun === '普通車')
            "
          >
            <v-col cols="2" class="">
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
              class=""
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

            <v-col
              cols="2"
              class=""
              v-if="
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '保管場所証明申請書'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '保管場所証明申請書'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '' ||
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '代行不要'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '' ||
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '代行不要'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '' ||
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '代行不要'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '' ||
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '代行不要'
              "
            >
            </v-col>
            <!-- <v-col
              cols="2"
              class=""
              v-if="
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '' ||
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '代行不要'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '' ||
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '代行不要'
              "
            >
            </v-col> -->
            <v-col
              v-if="
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '保管場所証明申請書'
              "
              cols="2"
              class="mt-1"
            >
              <div
                class="ncgarage-verification-kubun-completed ml-15"
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
            class=" normalCarDocumentsGarageVerification-completedDate"
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
            class="mt-10 justify-center"
            v-if="
                (this.contracts.newCarUsedCarKubun === '新車' ||
                this.contracts.newCarUsedCarKubun === '中古車')&&
                (this.contracts.normalCarLightCarKubun === '軽自動車')
                "
          >
            <v-col cols="2" class="">
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
              class=""
              v-if="
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '保管場所届出書'
              "
            >
              <v-checkbox
                @change="NCgarageVerificationKubunCompleted"
                v-model="normalCarDocumentsGarageVerification.isFillIn"
                label="ご記入"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '保管場所届出書'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '保管場所届出書'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '' ||
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '代行不要'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '' ||
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '代行不要'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '' ||
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '代行不要'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '' ||
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '代行不要'
              "
            >
            </v-col>
            <v-col
              v-if="
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '保管場所届出書'
              "
              cols="2"
              class="mt-1"
            >
              <div
                class="ncgarage-verification-kubun-completed ml-15"
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
          class=" lightCarDocumentsGarageVerification-completedDate"
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
          <v-row>
            <p
              v-if="
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '保管場所証明申請書'
              "
              class="explanation"
            >
              ・普通車用の車庫証明、4枚綴り（つづり）です。　 <br />
              　<br />
              　保管場所証明申請書、自認書または使用承諾書、配置図を3点セットで警察署に提出致します。　
            </p>
            <p
              v-if="
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '保管場所届出書'
              "
              class="explanation"
            >
              ・軽自動車用の車庫証明、4枚綴り（つづり）です。　<br />
              　<br />
              　保管場所届出書、自認書または使用承諾書、配置図を3点セットで警察署に提出致します。　
            </p>
          </v-row>

          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.normalCarDocumentsGarageVerification
                  .NCgarageVerificationKubun === '保管場所証明申請書'
              "
            >
              <v-btn
                @click="openModal('保管場所証明申請書記入例.jpg')"
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
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.lightCarDocumentsGarageVerification
                  .LCgarageVerificationKubun === '保管場所届出書'
              "
            >
              <v-btn
                @click="openModal('保管場所届出書記入例.jpg')"
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
                href="https://www.pref.hiroshima.lg.jp/site/police/055-05505-kei-hokan.html"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
          </v-row>
          <v-row
            v-if="
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書' ||
              this.lightCarDocumentsGarageVerification
                .LCgarageVerificationKubun === '保管場所届出書'
            "
          >
            <v-divider class="mt-5 separator"></v-divider>
          </v-row>
          <!-- <v-row>
        <v-col
          cols="1"
          class=" d-flex align-center"
          v-if="
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '保管場所届出書'
          "
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row> -->

          <v-row
            class="mt-10 justify-center"
            v-if="
              this.normalCarDocuments.poaOssKubun === 'OSS委任状' ||
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書' ||
              this.lightCarDocumentsGarageVerification
                .LCgarageVerificationKubun === '保管場所届出書'
            "
          >
            <v-col cols="2" class="">
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
              class=""
              v-if="
                this.storingMethod.selfCertificationConsentToUseKubun === ''
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.storingMethod.selfCertificationConsentToUseKubun === ''
              "
            >
            </v-col>

            <v-col
              cols="2"
              class=""
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
            <v-col cols="2" class=""> </v-col>
            <v-col cols="2" class=""> </v-col>
            <v-col
              v-if="
                this.storingMethod.selfCertificationConsentToUseKubun ===
                  '自認書' ||
                this.storingMethod.selfCertificationConsentToUseKubun ===
                  '使用承諾証'
              "
              cols="2"
              class="mt-1"
            >
              <div
                class="self-certification-consent-to-use-kubun-completed ml-15"
                :class="{
                  'is-fill-in-completed': storingMethod.isFillIn,
                }"
              >
                完了
              </div>
            </v-col>

            <!-- <v-col
          cols="2"
          class=" storingMethod-completedDate"
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
            <p class="explanation">
              ・ご成約頂いたお車の保管場所がお客様の所有物である事を証明するための書類です。　
            </p>
          </v-row>
          <v-row
            v-if="
              this.storingMethod.selfCertificationConsentToUseKubun ===
              '使用承諾証'
            "
          >
            <p class="explanation">
              ・駐車場がお客様自身の管理ではない場合、駐車場の管理者様に使用の許可を得るための書類です。　
            </p>
          </v-row>

          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.storingMethod.selfCertificationConsentToUseKubun ===
                '自認書'
              "
            >
              <v-btn
                @click="openModal('自認書記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.storingMethod.selfCertificationConsentToUseKubun ===
                '自認書'
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
              class="mt-3 d-flex align-center"
              v-if="
                this.storingMethod.selfCertificationConsentToUseKubun ===
                '使用承諾証'
              "
            >
              <v-btn
                @click="openModal('使用承諾証記入例.jpg')"
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
          <v-row
            v-if="
              this.normalCarDocuments.poaOssKubun === 'OSS委任状' ||
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書' ||
              this.lightCarDocumentsGarageVerification
                .LCgarageVerificationKubun === '保管場所届出書'
            "
          >
            <v-divider class="mt-5 separator"></v-divider>
          </v-row>
          <!-- <v-row>
        <v-col
          cols="1"
          class=" d-flex align-center"
          v-if="
            this.storingMethod.selfCertificationConsentToUseKubun === '自認書'
          "
        >
          <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn>
        </v-col>
      </v-row> -->
          <v-row
            class="mt-10 justify-center"
            v-if="
              this.normalCarDocuments.poaOssKubun === 'OSS委任状' ||
              this.normalCarDocumentsGarageVerification
                .NCgarageVerificationKubun === '保管場所証明申請書' ||
              this.lightCarDocumentsGarageVerification
                .LCgarageVerificationKubun === '保管場所届出書'
            "
          >
            <v-col cols="2" class="">
              <v-combobox
                v-model="arrangementDiagram.arrangementDiagramName"
                label=""
                :items="[]"
                variant="outlined"
                readonly
              ></v-combobox>
            </v-col>

            <v-col cols="2" class="">
              <v-checkbox
                @change="arrangementDiagramCompleted"
                label="ご記入"
                v-model="arrangementDiagram.isFillIn"
              >
              </v-checkbox>
            </v-col>
            <v-col cols="2" class=""> </v-col>
            <v-col cols="2" class=""> </v-col>
            <v-col cols="2" class="mt-1">
              <div
                class="arrangement-diagram-completed ml-15"
                :class="{
                  'is-fill-in-completed': arrangementDiagram.isFillIn,
                }"
              >
                完了
              </div>
            </v-col>
            <!-- <v-col cols="2" class=" arrangement-completedDate">
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
            <p class="explanation">
              ・お客様がお車の保管場所にどのように車を保管されているか確認するための書類です。　
            </p>
          </v-row>

          <v-row class="icon-ml">
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
                @click="openModal('配置図記入例.jpg')"
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
                href="https://www.google.com/maps/@34.3902772,132.5019091,15z?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                density="compact"
                icon="mdi-map-marker-outline"
              ></v-btn>
            </v-col>
          </v-row>

          <!-- <v-row>
        <v-col
          cols="1"
          class=" d-flex align-center"
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
              class="mt-8 mb-5 d-flex align-center other-documents"
              v-if="
                (this.contracts.newCarUsedCarKubun === '新車' ||
                this.contracts.newCarUsedCarKubun === '中古車')&&
                this.contracts.normalCarLightCarKubun === '普通車'
                "
            >
              　〇　その他確認事項
            </v-toolbar-title>
          </v-row>

          <v-row>
            <v-toolbar-title
              class="mt-8 mb-5 d-flex align-center other-documents"
              v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              this.contracts.normalCarLightCarKubun === '軽自動車'
              "
            >
              　〇　その他確認事項
            </v-toolbar-title>
          </v-row>

          <v-row class="mt-5 justify-center">
            <v-col
              cols="2"
              class=""
              v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
                this.contracts.normalCarLightCarKubun === '軽自動車')
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
              class=""
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
              class=""
              v-if="this.desiredNumber.isDesiredNumber === '有'"
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="this.desiredNumber.isDesiredNumber === '有'"
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.desiredNumber.isDesiredNumber === '' ||
                this.desiredNumber.isDesiredNumber === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.desiredNumber.isDesiredNumber === '' ||
                this.desiredNumber.isDesiredNumber === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.desiredNumber.isDesiredNumber === '' ||
                this.desiredNumber.isDesiredNumber === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.desiredNumber.isDesiredNumber === '' ||
                this.desiredNumber.isDesiredNumber === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class="mt-1"
              v-if="this.desiredNumber.isDesiredNumber === '有'"
            >
              <div
                class="desired-number-completed ml-15"
                :class="{
                  'is-fill-in-completed': desiredNumber.isFillIn,
                }"
              >
                完了
              </div>
            </v-col>
            <!-- <v-col
          cols="2"
          class=" desiredNumber-completedDate"
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
            <p class="explanation">
              ・希望番号が（有）の場合は<b>希望番号申請書</b>が必要になります。　<br />
              　お客様からお伺いした希望番号（4桁の数字）を届け出するための書類です。　<br />
              　<br />
              　人気が高いと考えられる希望番号は抽選制（月～金曜日受付分を翌週月曜日抽選）　<br />
              　になる場合があります。　
            </p>
          </v-row>

          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
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

            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="this.desiredNumber.isDesiredNumber === '有'"
            >
              <v-btn
                href="https://www.mlit.go.jp/jidosha/jidosha_tk6_000004.html"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
          </v-row>

          <v-row
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車')
            "
          >
            <v-divider class="mt-5 separator"></v-divider>
          </v-row>
          <!-- <v-row>
        <v-col
          cols="1"
          class=" d-flex align-center"
          v-if="this.desiredNumber.isDesiredNumber === '有'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn>
        </v-col>
      </v-row> -->
          <v-row class="mt-10 justify-center">
            <v-col
              cols="2"
              class=""
              v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
               this.contracts.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-select
                @update:modelValue="etcKubunChange"
                label="ETC"
                v-model="etc.etcKubun"
                :items="['', '有（ETC）', '有（ETC-2.0）', '無']"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.etc.etcKubun === '有（ETC）' ||
                etc.etcKubun === '有（ETC-2.0）'
              "
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
              class=""
              v-if="
                this.etc.etcKubun === '有（ETC）' ||
                etc.etcKubun === '有（ETC-2.0）'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.etc.etcKubun === '有（ETC）' ||
                etc.etcKubun === '有（ETC-2.0）'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.etc.etcKubun === '' ||
                etc.etcKubun === '' ||
                etc.etcKubun === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.etc.etcKubun === '' ||
                etc.etcKubun === '' ||
                etc.etcKubun === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.etc.etcKubun === '' ||
                etc.etcKubun === '' ||
                etc.etcKubun === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.etc.etcKubun === '' ||
                etc.etcKubun === '' ||
                etc.etcKubun === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class="mt-1"
              v-if="
                this.etc.etcKubun === '有（ETC）' ||
                etc.etcKubun === '有（ETC-2.0）'
              "
            >
              <div
                class="etc-kubun-completed ml-15"
                :class="{
                  'is-fill-in-completed': etc.isFillIn,
                }"
              >
                完了
              </div>
            </v-col>

            <!-- <v-col
          cols="2"
          class=""
          v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
        >
        </v-col>

        <v-col
          cols="2"
          class=" etc-completedDate"
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
          <v-row v-if="this.etc.etcKubun === '有（ETC）'">
            <p class="explanation">
              ・ETCが（有）の場合は<b>セットアップ申込書</b>が必要になります。　<br />
              　ご成約頂いたお車のETCを使用できるようにするための書類です。　
            </p>
          </v-row>
          <v-row v-if="this.etc.etcKubun === '有（ETC-2.0）'">
            <p class="explanation">
              ・ETC2.0が（有）の場合は<b>セットアップ申込書</b>が必要になります。　<br />
              　ご成約頂いたお車のETCを使用できるようにするための書類です。　<br />
              　<br />
              　ETC2.0は、高速道路の通行料金の支払いに便利なETCが進化したもので、2016年春からスタートしたサービスです。　<br />
              　リアルタイムの渋滞情報を解析して最適なルートを示したり、災害発生時に通行可能な道路へ誘導することで、　<br />
              　より安全・安心な走行をサポートします。　
            </p>
          </v-row>

          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="this.etc.etcKubun === '有（ETC）'"
            >
              <v-btn
                @click="openModal('ETC申込用紙記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="etc.etcKubun === '有（ETC-2.0）'"
            >
              <v-btn
                @click="openModal('ETC2.0申込用紙記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>

            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="this.etc.etcKubun === '有（ETC）'"
            >
              <v-btn
                href="https://www.go-etc.jp/"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="this.etc.etcKubun === '有（ETC-2.0）'"
            >
              <v-btn
                href="https://www.go-etc.jp/etc2/index.html"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
          </v-row>
          <v-row
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車')
            "
          >
            <v-divider class="mt-5 separator"></v-divider>
          </v-row>
          <!-- <v-row>
        <v-col
          cols="1"
          class=" d-flex align-center"
          v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row> -->
          <v-row class="mt-10 justify-center">
            <v-col
              cols="2"
              class=""
              v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車')
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
              class=""
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
              class=""
              v-if="this.extendedWarranty.isExtendedWarranty === '有'"
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="this.extendedWarranty.isExtendedWarranty === '有'"
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.extendedWarranty.isExtendedWarranty === '' ||
                this.extendedWarranty.isExtendedWarranty === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.extendedWarranty.isExtendedWarranty === '' ||
                this.extendedWarranty.isExtendedWarranty === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.extendedWarranty.isExtendedWarranty === '' ||
                this.extendedWarranty.isExtendedWarranty === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.extendedWarranty.isExtendedWarranty === '' ||
                this.extendedWarranty.isExtendedWarranty === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class="mt-1"
              v-if="this.extendedWarranty.isExtendedWarranty === '有'"
            >
              <div
                class="extended-warranty-completed ml-15"
                :class="{
                  'is-fill-in-completed': extendedWarranty.isFillIn,
                }"
              >
                完了
              </div>
            </v-col>
            <!-- <v-col
          cols="2"
          class=" extendedWarranty-completedDate"
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
            <p class="explanation">
              ・延長保証が（有）の場合は<b>延長保証申込書</b>が必要になります。　<br />
              　ご成約頂いたお車に延長保証を適用するための書類です。　<br />
              　<br />
              　メーカーの一般保証は、新車登録から初回車検を迎える3年目（ただし6万km）で終了してしまいます。　<br />
              　マツダ延長保証〈新車5年プラン/5年プラン〉は、保証期間を5年目（ただし10万km）まで延長。　<br />
              　万が一の故障の際も、回数・金額無制限の無料修理が受けられます。　<br />
              　※ただし機能不具合を伴わない修理は保証対象になりません。
            </p>
          </v-row>
          <v-row
            v-if="
              this.contracts.newCarUsedCarKubun === '中古車' &&
              this.extendedWarranty.isExtendedWarranty === '有'
            "
          >
            <p class="explanation">
              ・延長保証が（有）の場合は<b>保証申込書</b>が必要になります。　<br />
              　ご成約頂いたお車に延長保証を適用するための書類です。　<br />
              　<br />
              　保証にさらなる安心をプラス。万が一の故障でも無料で修理。　<br />
              　「さわやか保証2年」「さわやか保証」の期間を、有償で延長できる保証サービスです。　<br />
              　マツダ認定U-carプレミアム車両を対象とした「さわやか保証2年」の期間を延長できる「さわやかプラスプレミアム」、　<br />
              　それ以外の車両を対象とした「さわやか保証」の期間を延長できる「さわやかプラス」をご用意しています。　
            </p>
          </v-row>

          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.contracts.newCarUsedCarKubun === '新車' &&
                this.extendedWarranty.isExtendedWarranty === '有'
              "
            >
              <v-btn
                @click="openModal('延長保証記入例.jpg')"
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
              class="mt-3 d-flex align-center"
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
          <v-row
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車')
            "
          >
            <v-divider class="mt-5 separator"></v-divider>
          </v-row>
          <v-row class="mt-10 justify-center">
            <v-col
              cols="2"
              class=""
              v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車')
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
              class=""
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
              class=""
              v-if="this.maintenancePack.isMaintenancePack === '有'"
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="this.maintenancePack.isMaintenancePack === '有'"
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.maintenancePack.isMaintenancePack === '' ||
                this.maintenancePack.isMaintenancePack === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.maintenancePack.isMaintenancePack === '' ||
                this.maintenancePack.isMaintenancePack === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.maintenancePack.isMaintenancePack === '' ||
                this.maintenancePack.isMaintenancePack === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.maintenancePack.isMaintenancePack === '' ||
                this.maintenancePack.isMaintenancePack === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class="mt-1"
              v-if="this.maintenancePack.isMaintenancePack === '有'"
            >
              <div
                class="maintenance-pack-completed ml-15"
                :class="{
                  'is-fill-in-completed': maintenancePack.isFillIn,
                }"
              >
                完了
              </div>
            </v-col>

            <!-- <v-col
          cols="2"
          class=" maintenancePack-completedDate"
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
            <p class="explanation">
              ・メンテナンスパックが（有）の場合は<b>パックdeメンテ申込書</b>が必要になります。　<br />
              　メンテナンスパック（パックdeメンテ）にご加入頂くための書類です。　<br />
              　<br />
              　ご商談の際は36Sコース　<br />
              　（5年間半年ごとの点検、5年後2回目の車検　<br />
              　　※5年間半年ごとの点検＝半年ごとの6ヶ月点検（MSC）と12ヶ月点検※　<br />
              　　※5年後2回目の車検＝1回目の車検は納車から3年後、2回目の車検は納車から5年後※　<br />
              　　がセットになったプラン）　<br />
              　をおすすめとしてご提案させて頂いています。　
            </p>
          </v-row>

          <v-row
            class="icon-ml"
            v-if="this.maintenancePack.isMaintenancePack === '有'"
          >
            <v-col cols="1" class="mt-3 d-flex align-center">
              <v-btn
                @click="openModal('メンテナンスパック申込用紙記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col cols="1" class="mt-3 d-flex align-center">
              <v-btn
                href="https://www.efh.co.jp/after-service/maintenance/#pack"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
          </v-row>
          <v-row
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車')
            "
          >
            <v-divider class="mt-5 separator"></v-divider>
          </v-row>
          <v-row class="mt-10 justify-center">
            <v-col
              cols="2"
              class=""
              v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              (this.contracts.normalCarLightCarKubun === '普通車' ||
              this.contracts.normalCarLightCarKubun === '軽自動車')
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
              class=""
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
              class=""
              v-if="
                this.jaf.isJafPaymentKubun === '有（口座振替）' ||
                this.jaf.isJafPaymentKubun === '有（クレジット）'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.jaf.isJafPaymentKubun === '有（口座振替）' ||
                this.jaf.isJafPaymentKubun === '有（クレジット）'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.jaf.isJafPaymentKubun === '' ||
                this.jaf.isJafPaymentKubun === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.jaf.isJafPaymentKubun === '' ||
                this.jaf.isJafPaymentKubun === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.jaf.isJafPaymentKubun === '' ||
                this.jaf.isJafPaymentKubun === '無'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.jaf.isJafPaymentKubun === '' ||
                this.jaf.isJafPaymentKubun === '無'
              "
            >
            </v-col>

            <v-col
              cols="2"
              class="mt-1"
              v-if="
                this.jaf.isJafPaymentKubun === '有（口座振替）' ||
                this.jaf.isJafPaymentKubun === '有（クレジット）'
              "
            >
              <div
                class="jaf-payment-kubun-completed ml-15"
                :class="{
                  'is-fill-in-completed': jaf.isFillIn,
                }"
              >
                完了
              </div>
            </v-col>

            <!-- <v-col
          cols="2"
          class=""
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
          class=" jaf-completedDate"
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
            <p class="explanation">
              ・JAFが（有）の場合は<b>電子手続き</b>が必要になります。　<br />
              　ご成約頂いたお車がJAFに加入頂くための手続きです。　
            </p>
          </v-row>

          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
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
          v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              this.contracts.normalCarLightCarKubun === '軽自動車'
              "
          >
            <v-divider class="mt-5 separator"></v-divider>
          </v-row>
          <v-row
            class="mt-10 justify-center"
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              this.contracts.normalCarLightCarKubun === '軽自動車'
              "
          >
            <v-col cols="2" class="">
              <v-combobox
                class="v-select-list"
                v-model="taxDeclaration.taxDeclarationName"
                label=""
                :items="[]"
                variant="outlined"
                readonly
              ></v-combobox>
            </v-col>
            <v-col cols="2 taxDeclaration" class="">
              <v-checkbox
                @change="taxDeclarationCompleted"
                label="ご記入"
                v-model="taxDeclaration.isFillIn"
              >
              </v-checkbox>
            </v-col>
            <v-col cols="2" class=""> </v-col>
            <v-col cols="2" class=""> </v-col>
            <v-col cols="2" class="mt-1">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': taxDeclaration.isFillIn,
                }"
              >
                完了
              </div>
            </v-col>

            <!-- <v-col cols="2 taxDeclaration-completedDate" class="">
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
          <v-row 
              v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              this.contracts.normalCarLightCarKubun === '軽自動車'
              "
          >
            <p class="explanation">
              ・ご成約頂いたお車が軽自動車の場合は<b>軽自動車税申告書</b>が必要になります。　<br />
              　軽自動車税の支払い開始を申告するための書類です。
            </p>
          </v-row>

          <v-row
            class="icon-ml"
            v-if="
              (this.contracts.newCarUsedCarKubun === '新車' ||
              this.contracts.newCarUsedCarKubun === '中古車')&&
              this.contracts.normalCarLightCarKubun === '軽自動車'
              "
          >
            <v-col cols="1" class="mt-3 d-flex align-center">
              <v-btn
                @click="openModal('税申告書記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col cols="1" class="mt-3 d-flex align-center">
              <v-btn
                href="https://www.pref.hiroshima.lg.jp/site/zei/1170296824465.html"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
          </v-row>

          <!-- <v-row>
        <v-col
          cols="1"
          class=" d-flex align-center"
          v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn>
        </v-col>
      </v-row> -->

      <v-row v-if="this.contracts.paymentKubun === 'クレジット'">
            <v-toolbar-title class="mt-8 mb-5 d-flex align-center credit">
              　〇　クレジット（お客様に通常クレジットまたはスカイプランでご成約頂いた際の手続きです。）
            </v-toolbar-title>
          </v-row>
          <v-row
            class="mt-5 justify-center"
            v-if="this.contracts.paymentKubun === 'クレジット'"
          >
            <v-col cols="2" class="">
              <v-select
                @update:modelValue="isCreditChange"
                v-model="credit.creditTp"
                label="通常クレジットorスカイプラン"
                :items="['', '通常クレジット', 'スカイプラン']"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="2" class=""> </v-col>
            <v-col cols="2" class=""> </v-col>
            <v-col cols="2" class=""> </v-col>
            <v-col cols="2" class=""> </v-col>
          </v-row>

          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.contracts.newCarUsedCarKubun === '新車' &&
                this.credit.creditTp === 'スカイプラン'
              "
            >
              <v-btn
                href="https://www.mazdacr.co.jp/lineup/lineup.html?mode=sky"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.contracts.newCarUsedCarKubun === '中古車' &&
                this.credit.creditTp === 'スカイプラン'
              "
            >
              <v-btn
                href="https://www.mazda.co.jp/purchase/ucar/skyplan-cp/"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
          </v-row>
          <v-row
            v-if="
              this.credit.creditTp === 'スカイプラン' ||
              this.credit.creditTp === '通常クレジット'
            "
          >
            <v-divider class="mt-5 separator"></v-divider>
          </v-row>
          <v-row
            class="mt-10 justify-center"
            v-if="
              this.credit.creditTp === '通常クレジット' ||
              this.credit.creditTp === 'スカイプラン'
            "
          >
            <v-col cols="2" class="">
              <v-select
                @update:modelValue="isCreditChange"
                v-model="credit.creditDocuments"
                label="電子or書面"
                :items="['', '電子', '書面']"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="this.credit.creditDocuments === '電子'"
            >
              <v-checkbox
                @change="CreditDocumentsCompleted"
                v-model="credit.electronicProcedures"
                label="電子手続き(meats)"
              >
              </v-checkbox>
            </v-col>
            <v-col cols="2" class="" v-if="this.credit.creditDocuments === ''">
            </v-col>
            <v-col cols="2" class="" v-if="this.credit.creditDocuments === ''">
            </v-col>
            <v-col cols="2" class="" v-if="this.credit.creditDocuments === ''">
            </v-col>
            <v-col cols="2" class="" v-if="this.credit.creditDocuments === ''">
            </v-col>
            <v-col
              cols="2"
              class=""
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
              class=""
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
              class=""
              v-if="
                this.credit.creditDocuments === '電子' ||
                this.credit.creditDocuments === '書面'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="this.credit.creditDocuments === '電子'"
            >
            </v-col>
            <v-col
              cols="2"
              class="mt-1"
              v-if="
                this.credit.creditDocuments === '電子' ||
                this.credit.creditDocuments === '書面'
              "
            >
              <div
                class="credit-documents-completed ml-15"
                :class="{
                  'is-fill-in-completed ':
                    this.credit.electronicProcedures ||
                    (this.credit.isFillIn && this.credit.isRegisteredSeal),
                }"
              >
                完了
              </div>
            </v-col>

            <!-- <v-col cols="2" class=" credit-completedDate">
          <v-text-field
            :class="{ 'completedDate-input': credit.completedDate != false }"
            type="date"
            v-model="credit.completedDate"
            label="完了日"
          ></v-text-field>
        </v-col> -->
          </v-row>

          <v-row
            v-if="
              this.contracts.insuranceKubun === '当社加入' ||
              this.contracts.insuranceKubun === '他社加入'
            "
          >
            <v-toolbar-title class="mt-8 mb-5 d-flex align-center insurance">
              　〇　保険（お客様の大切なお車、お客様自身の安心・安全をサポートさせて頂く為のご提案です。）
            </v-toolbar-title>
          </v-row>
          <v-row
            class="mt-5 justify-center"
            v-if="this.contracts.insuranceKubun === '当社加入'"
          >
            <v-col cols="2" class="">
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
              class=""
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
              class=""
              v-if="
                this.insurance.jocInsuranceCompany === '東京海上' ||
                this.insurance.jocInsuranceCompany === '三井住友' ||
                this.insurance.jocInsuranceCompany === '損保ジャパン'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.insurance.jocInsuranceCompany === '東京海上' ||
                this.insurance.jocInsuranceCompany === '三井住友' ||
                this.insurance.jocInsuranceCompany === '損保ジャパン'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.contracts.insuranceKubun === '当社加入' &&
                this.insurance.jocInsuranceCompany === ''
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.contracts.insuranceKubun === '当社加入' &&
                this.insurance.jocInsuranceCompany === ''
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.contracts.insuranceKubun === '当社加入' &&
                this.insurance.jocInsuranceCompany === ''
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.contracts.insuranceKubun === '当社加入' &&
                this.insurance.jocInsuranceCompany === ''
              "
            >
            </v-col>

            <v-col
              cols="2"
              class="mt-1"
              v-if="
                this.insurance.jocInsuranceCompany === '東京海上' ||
                this.insurance.jocInsuranceCompany === '三井住友' ||
                this.insurance.jocInsuranceCompany === '損保ジャパン'
              "
            >
              <div
                class="insurance-completed ml-15"
                :class="{
                  'is-fill-in-completed': insurance.joiningProcedure,
                }"
              >
                完了
              </div>
            </v-col>
          </v-row>
          <v-row
            class="mt-5 justify-center"
            v-if="this.contracts.insuranceKubun === '他社加入'"
          >
            <v-col cols="2" class="">
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
              class=""
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
              class=""
              v-if="
                this.insurance.jocInsuranceCompany === '東京海上' ||
                this.insurance.jocInsuranceCompany === '三井住友' ||
                this.insurance.jocInsuranceCompany === '損保ジャパン'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.insurance.jocInsuranceCompany === '東京海上' ||
                this.insurance.jocInsuranceCompany === '三井住友' ||
                this.insurance.jocInsuranceCompany === '損保ジャパン'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.contracts.insuranceKubun === '他社加入' &&
                this.insurance.jocInsuranceCompany === ''
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.contracts.insuranceKubun === '他社加入' &&
                this.insurance.jocInsuranceCompany === ''
              "
            >
            </v-col>
            <v-col
              cols="2"
              class="mt-1"
              v-if="this.contracts.insuranceKubun === '他社加入'"
            >
              <div
                class="insurance-completed2 ml-15"
                :class="{
                  'is-fill-in-completed': insurance.confirmationOfMembership,
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
            <p class="explanation">
              ・保険をご加入頂く場合は<b>電子手続き</b>が必要になります。　<br />
              　<br />
              　※ネット保険との違い※　<br />
              　<br />
              　１．ネット保険はお客様自身で保険の内容をご理解頂き選ぶ必要がありますが、対面型の保険はお客様に合った　<br />
              　　　的確な保険内容をご提示することができます。　<br />
              　　　また保険の見直しや内容の変更等は担当者にお電話頂くだけでお客様の状況にあった保険内容に変更することもできます。　<br />
              　<br />
              　２．事故をしてしまった場合、気が動転してどのように対応すればいいかわからなくなってしまった場合でも　<br />
              　　　担当者にお電話を頂くだけで、状況に応じてどのような対応をすればいいか手順を踏みながら丁寧に　<br />
              　　　ご説明することができます。　<br />
              　<br />
              　３．お車をご案内させて頂く時からの担当者とのつながりがあるからこその　<br />
              　　　話しやすさや相談のしやすさもネット保険では付帯することができない見えない保険内容の１つです。　<br />
              　<br />
              　４．ネット保険と比べて金額は高くなりますが、金額差以上の「お客様の安心・安全をサポートする気持ち」　<br />
              　　　を第一にご案内いたします。
            </p>
          </v-row>
          <v-row
            v-if="
              this.contracts.insuranceKubun === '他社加入'
            "
          >
            <p class="explanation">
              ・お客様が他社加入をご希望される場合は、ご加入予定の保険会社をお伺いさせて頂き納車日前に加入状況をお伺いしてください。
            </p>
          </v-row>
          <!-- <v-col
          cols="2"
          v-if="
            this.insurance.jocInsuranceCompany === 'A社' ||
            this.insurance.jocInsuranceCompany === 'B社' ||
            this.insurance.jocInsuranceCompany === 'C社'
          "
          class=" insurance-completedDate"
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

          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
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
              class="mt-3 d-flex align-center"
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
              class="mt-3 d-flex align-center"
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
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.insurance.jocInsuranceCompany === '東京海上' ||
                this.insurance.jocInsuranceCompany === '三井住友' ||
                this.insurance.jocInsuranceCompany === '損保ジャパン'
              "
            >
              <v-btn
                @click="insuranceImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>
          </v-row>
          <v-row
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
          >
            <v-divider class="mt-5 separator"></v-divider>
          </v-row>
          <v-row
            class="mt-10 justify-center"
            v-if="
              this.insurance.jocInsuranceCompany === '東京海上' ||
              this.insurance.jocInsuranceCompany === '三井住友' ||
              this.insurance.jocInsuranceCompany === '損保ジャパン'
            "
          >
            <v-col cols="2" class="">
              <v-combobox
                label=""
                v-model="insurance.skyPlus"
                :items="[]"
                variant="outlined"
                readonly
              ></v-combobox>
            </v-col>
            <v-col cols="2 taxDeclaration" class="">
              <v-checkbox
                @change="skyPlusCompleted"
                label="ご説明"
                v-model="insurance.skyPlusExplanation"
              >
              </v-checkbox>
            </v-col>
            <v-col cols="2" class=""> </v-col>
            <v-col cols="2" class=""> </v-col>
            <v-col cols="2" class="mt-1">
              <div
                class="sky-plus-completed ml-15"
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
            <p class="explanation">
              ※マツダ販売店で自動車保険を契約された方限定の特典です※　<br />
              　<br />
              　マツダの自動車保険にご加入いただいたお客様に無償で付帯でき、　<br />
              　気になる小傷も、自動車保険（車両保険）を使用せず、わずかなご負担でボディリペアできます。　
            </p>
          </v-row>

          <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
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
          class=" d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '東京海上'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class=" d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '三井住友'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class=" d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '損保ジャパン'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row> -->
          <!-- <v-col
          cols="2"
          v-if="this.contracts.insuranceKubun === '他社加入'"
          class=" insurance-completedDate"
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


          <v-row class="mt-8 mb-5 d-flex align-center deliveryDate">
            <v-toolbar-title
              v-if="
                (this.contracts.newCarUsedCarKubun === '新車' ||
                  this.contracts.newCarUsedCarKubun === '中古車') &&
                (this.contracts.normalCarLightCarKubun === '普通車' ||
                  this.contracts.normalCarLightCarKubun === '軽自動車') &&
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === 'クレジット' ||
                  this.contracts.paymentKubun === '銀行ローン' ||
                  this.contracts.paymentKubun === '所有権留保')
              "
            >
              　〇　納車日（ご成約頂いたお車が登録されて２週間後がご納車日の目安となります。）
            </v-toolbar-title>
          </v-row>
          <v-row class="mt-5 justify-center">
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
                  this.contracts.paymentKubun === '所有権留保')
              "
              class=""
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
              class=""
              v-if="
                (this.contracts.newCarUsedCarKubun === '新車' ||
                  this.contracts.newCarUsedCarKubun === '中古車') &&
                (this.contracts.normalCarLightCarKubun === '普通車' ||
                  this.contracts.normalCarLightCarKubun === '軽自動車') &&
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === 'クレジット' ||
                  this.contracts.paymentKubun === '銀行ローン' ||
                  this.contracts.paymentKubun === '所有権留保')
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                (this.contracts.newCarUsedCarKubun === '新車' ||
                  this.contracts.newCarUsedCarKubun === '中古車') &&
                (this.contracts.normalCarLightCarKubun === '普通車' ||
                  this.contracts.normalCarLightCarKubun === '軽自動車') &&
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === 'クレジット' ||
                  this.contracts.paymentKubun === '銀行ローン' ||
                  this.contracts.paymentKubun === '所有権留保')
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                (this.contracts.newCarUsedCarKubun === '新車' ||
                  this.contracts.newCarUsedCarKubun === '中古車') &&
                (this.contracts.normalCarLightCarKubun === '普通車' ||
                  this.contracts.normalCarLightCarKubun === '軽自動車') &&
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === 'クレジット' ||
                  this.contracts.paymentKubun === '銀行ローン' ||
                  this.contracts.paymentKubun === '所有権留保')
              "
            >
            </v-col>

            <v-col
              cols="2"
              class="mt-1"
              v-if="
                (this.contracts.newCarUsedCarKubun === '新車' ||
                  this.contracts.newCarUsedCarKubun === '中古車') &&
                (this.contracts.normalCarLightCarKubun === '普通車' ||
                  this.contracts.normalCarLightCarKubun === '軽自動車') &&
                (this.contracts.paymentKubun === '現金' ||
                  this.contracts.paymentKubun === 'クレジット' ||
                  this.contracts.paymentKubun === '銀行ローン' ||
                  this.contracts.paymentKubun === '所有権留保')
              "
            >
              <div
                class="delivery-date-completed ml-15"
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
                this.contracts.paymentKubun === '所有権留保')
            "
          >
            <p class="explanation">
              ・マツダの純正オプション以外の部品などを取り付ける場合は登録から納車までに２週間以上　<br />
              　お時間を頂く場合があります。
            </p>
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
                this.contracts.paymentKubun === '所有権留保')
            "
          >
            <v-toolbar-title class="mt-16 d-flex align-center goal">
              　▲　お手続きは以上になります。お時間頂きありがとうございました。
            </v-toolbar-title>
          </v-row>
        </div>
        <!-- 下取・買取 -->
        <div class="buy-trade">
          <div v-if="this.start.startKubun === '下取・買取'">
            <v-row>
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　▼　ここからは下取・買取のお手続きになります。
              </v-toolbar-title>
            </v-row>
            <v-row>
              <p class="mt-9 supporting-sentences">　お預かりするお車は、</p>
            </v-row>

            <v-row class="mt-9 justify-center">
              <v-col cols="2" class="">
                <v-select
                  @update:modelValue="tradeInPurchaseKubunChange"
                  v-model="tradeInPurchase.tradeInPurchaseKubun"
                  label="（１）下取or買取"
                  :items="['', '下取', '買取']"
                  variant="outlined"
                ></v-select>
              </v-col>
              <v-col cols="2" class="">
                <v-select
                  @update:modelValue="normalCarLightCarKubunChange"
                  v-model="tradeInPurchase.normalCarLightCarKubun"
                  label="（２）普通車or軽自動車"
                  :items="['', '普通車', '軽自動車']"
                  variant="outlined"
                ></v-select>
              </v-col>
              <v-col cols="2" class="">
                <v-select
                  @update:modelValue="nameChangeDeletionKubunChange"
                  v-model="tradeInPurchase.nameChangeDeletionKubun"
                  label="（３）名変or抹消"
                  :items="['', '名変', '抹消']"
                  variant="outlined"
                ></v-select>
              </v-col>
              <v-col cols="2" class="">
                <v-select
                  @update:modelValue="ownershipKubunChange"
                  v-model="tradeInPurchase.ownershipKubun"
                  label="（４）所有権"
                  :items="[
                    '',
                    '本人所有',
                    'アンフィニ所有',
                    '交換コーナー利用',
                    'その他所有',
                  ]"
                  variant="outlined"
                ></v-select>
              </v-col>
              <v-col cols="2" class="mt-2">
                <v-btn class="ml-16" @click="tradeInPurchaseClear"> clear </v-btn>
              </v-col>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <p class="explanation">
                ！所有権が<b>その他所有</b>の場合は、お客様自身が車検証に記載されているお車の現所有者様に　<br />
                　所有権を解除してもらうようご依頼頂く必要があります。　<br />
                <br />
                　ご依頼頂くと現所有者様の<b>委任状</b>と<b>印鑑証明</b>が発行されますのでお預かりしてください。　<br />
                　↑主にモータースや他社、他銘柄など　
              </p>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <p class="explanation">
                ！所有権が<b>その他所有</b>の場合は、お客様自身が車検証に記載されているお車の現所有者様に　<br />
                　所有権を解除してもらうようご依頼頂く必要があります。　<br />
                <br />
                　ご依頼頂くと現所有者様の<b>申請依頼書</b>と<b>軽自動車承諾書</b>が発行されますのでお預かりしてください。　<br />
                　↑主にモータースや他社、他銘柄など　
              </p>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　<b>※</b>　その他・確認事項（該当する場合は内容にチェックしてください。）
              </v-toolbar-title>
            </v-row>
            <v-row class="justify-center">
              <v-col cols="2" class="mt-10">
                <v-checkbox
                @change="isCorporateVehiclesChange"
                  v-if="
                    (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                      this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                    (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                      this.tradeInPurchase.normalCarLightCarKubun ===
                        '軽自動車')
                  "
                  v-model="tradeInCarAndOtherConfirma.isCorporateVehicles"
                  label="法人車"
                >
                </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-10">
                <v-checkbox
                  @change="isDeathOfPersonChange"
                  v-if="
                    this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                    this.tradeInPurchase.normalCarLightCarKubun === '普通車'
                  "
                  v-model="tradeInCarAndOtherConfirma.isDeathOfPerson"
                  label="本人逝去"
                >
                </v-checkbox>
              </v-col>
              <v-col
                v-if="
                  this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取'
                "
                cols="2"
                class=""
              >
              </v-col>
              <v-col
                v-if="
                  this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取'
                "
                cols="2"
                class=""
              >
              </v-col>
              <v-col
                v-if="
                  this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取'
                "
                cols="2"
                class=""
              >
              </v-col>
            </v-row>

            <v-row
              v-if="
                this.tradeInCarAndOtherConfirma.isCorporateVehicles === true
              "
            >
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　〇　法人車・追加必要書類（社員が記入、入力、準備する書類）
              </v-toolbar-title>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="tradeInCarAndOtherConfirma.isCorporateVehicles === true"
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    tradeInPurchaseCommonRequiredDocuments.purchaseInvoiceShippingDestinationContactSlip
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
                <v-checkbox
                  v-model="tradeInPurchaseCommonRequiredDocuments.purchaseInvoiceShippingDestinationContactSlipPreparation"
                  label="準備"
                >
                </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': tradeInPurchaseCommonRequiredDocuments.purchaseInvoiceShippingDestinationContactSlipPreparation,
                }"
              >
                完了
              </div>
            </v-col>
            </v-row>
            <v-row
              v-if="tradeInCarAndOtherConfirma.isCorporateVehicles === true"
            >
              <p class="explanation">
                ・お預かりするお車が<b>法人車</b>の場合に必要になります。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="tradeInCarAndOtherConfirma.isCorporateVehicles === true"
            >
              <v-btn
                href="仕入れ明細書発送先連絡票.xlsx"
                target="_blank"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>
          </v-row>
            <v-row
              v-if="this.tradeInCarAndOtherConfirma.isDeathOfPerson === true"
            >
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　〇　本人逝去・追加必要書類
              </v-toolbar-title>
            </v-row>
            <v-row
              class="justify-center"
              v-if="this.tradeInCarAndOtherConfirma.isDeathOfPerson === true"
            >
              <v-col cols="2" class="mt-5">
                <v-select
                  @update:modelValue="purchasePriceKubunChange"
                  v-model="passedAwayRequiredDocuments.purchasePriceKubun"
                  label="買取価格"
                  :items="['', '10万円以上', '10万円以下']"
                  variant="outlined"
                ></v-select>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                this.tradeInCarAndOtherConfirma.isDeathOfPerson === true
              "
            >
              <p class="explanation">
                ・お車の査定をさせて頂き買取価格が<b>10万円以上・以下</b>によって必要書類が異なります。　
              </p>
            </v-row>
            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上' ||
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    passedAwayRequiredDocuments.inheritanceDivisionAgreement
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
                <v-checkbox
                  v-model="requiredDocumentsForRegularCars.inheritanceDivisionAgreementIsFillIn"
                  label="ご署名"
                >
                </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5">
                <v-checkbox
                  v-model="requiredDocumentsForRegularCars.inheritanceDivisionAgreementIsOfficialSeal"
                  label="実印"
                >
                </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5">
                <v-checkbox
                  v-model="requiredDocumentsForRegularCars.inheritanceDivisionAgreementSealCertificateOfRepresentativeHeir"
                  label="印鑑証明"
                >
                </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForRegularCars.inheritanceDivisionAgreementIsFillIn &&
                                          requiredDocumentsForRegularCars.inheritanceDivisionAgreementIsOfficialSeal&&
                                          requiredDocumentsForRegularCars.inheritanceDivisionAgreementSealCertificateOfRepresentativeHeir,
                }"
              >
                完了
              </div>
            </v-col>

            </v-row>
            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <p class="explanation">
                ・お車を査定させて頂き買取価格が<b>10万円以上</b>の場合<b>遺産分割協議書</b>が必要になります。<br />
                　<br />
                　遺産分割協議書には<b>相続権のある方全員のご署名と実印</b>が必要になります。<br />
                　<br />
                ！<b>印鑑証明は代表相続人のみ</b>必要になります。
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-btn
                @click="inheritanceDivisionAgreementModal = true"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-btn
                @click="inheritanceDivisionAgreementImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>

            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-btn
                href="https://www.bk.mufg.jp/sonaeru/souzoku/column/003/index.html"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
          </v-row>
            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上' ||
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="passedAwayRequiredDocuments.familyRegister"
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上' ||
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
                "
                v-model="requiredDocumentsForRegularCars.familyRegisterStorage"
                label="お預かり"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForRegularCars.familyRegisterStorage
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上' ||
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
              "
            >
              <p class="explanation">
                ・個人の身分事項が記載された「戸籍簿」の写しです。　<br />
                <br />
                　市区町村の役所で発行できます。　<br />
                <br />
                　発行には　<br />
                　➀本人確認ができる書類（運転免許証・個人番号カード・住民基本台帳カード・健康保険証等）　<br />
                　➁申請書（各市区町村が定める様式に必要事項を記載）　<br />
                　➂印鑑（朱肉を使う印鑑であれば認印でも可）　<br />
                　➃手数料（1通につき）450円　<br />
                　が必要になります。
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上' ||
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
              "
            >
              <v-btn
                href="https://www.city.hiroshima.lg.jp/soshiki/1021/15207.html"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
            </v-row>
            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上' ||
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上' ||
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    passedAwayRequiredDocuments.revisedOriginalFamilyRegister
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上' ||
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
                "
                v-model="requiredDocumentsForRegularCars.revisedOriginalFamilyRegisterStorage"
                label="お預かり"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForRegularCars.revisedOriginalFamilyRegisterStorage
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上' ||
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
              "
            >
              <p class="explanation">
                ・戸籍法の改正にともない戸籍様式が書き換え（＝改製）られた際、書き換えられる前の戸籍謄本です。<br/>
                　改製前に除籍された方、改製前になされた「認知」「養子縁組」「離婚」「養子離縁」などに関する事項が含まれています。<br/>
                <br/>
                　市区町村の役所で発行できます。　<br />
                <br />
                　発行には　<br />
                　➀本人確認ができる書類（運転免許証・個人番号カード・住民基本台帳カード・健康保険証等）　<br />
                　➁申請書（各市区町村が定める様式に必要事項を記載）　<br />
                　➂印鑑（朱肉を使う印鑑であれば認印でも可）　<br />
                　➃手数料（1通につき）750円　<br />
                　が必要になります。
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上' ||
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
              "
            >
              <v-btn
                href="https://www.city.hiroshima.lg.jp/site/faq/15007.html"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
            </v-row>

            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上' ||
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForRegularCars.powerOfAttorney"
                  label="代表相続人の"
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上'
                "
                v-model="requiredDocumentsForRegularCars.powerOfAttorneyIsFillIn"
                label="ご記入"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上'
                "
                v-model="requiredDocumentsForRegularCars.powerOfAttorneyIsOfficialSeal"
                label="実印"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上'
                "
                v-model="requiredDocumentsForRegularCars.powerOfAttorneySealCertificateOfRepresentativeHeir"
                label="印鑑証明"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForRegularCars.powerOfAttorneyIsFillIn&&
                                          requiredDocumentsForRegularCars.powerOfAttorneyIsOfficialSeal&&
                                          requiredDocumentsForRegularCars.powerOfAttorneySealCertificateOfRepresentativeHeir
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <p class="explanation">
                ・代表相続人の<b>実印</b>と<b>印鑑証明</b>が必要になります。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-btn
                @click="openModal('委任状（代表相続人）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-btn
                @click="poaImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>
            </v-row>
            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以下'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForRegularCars.powerOfAttorney"
                  label="相続人全員の"
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
                "
                v-model="requiredDocumentsForRegularCars.powerOfAttorneyIsFillIn"
                label="ご記入"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
                "
                v-model="requiredDocumentsForRegularCars.powerOfAttorneyIsOfficialSeal"
                label="実印"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
                "
                v-model="requiredDocumentsForRegularCars.powerOfAttorneySealCertificateOfRepresentativeHeir"
                label="印鑑証明"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForRegularCars.powerOfAttorneyIsFillIn&&
                                          requiredDocumentsForRegularCars.powerOfAttorneyIsOfficialSeal&&
                                          requiredDocumentsForRegularCars.powerOfAttorneySealCertificateOfRepresentativeHeir
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以下'
              "
            >
              <p class="explanation">
                ・相続人全員の<b>実印</b>と<b>印鑑証明</b>が必要になります。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以下'
              "
            >
              <v-btn
                @click="openModal('委任状（相続人全員）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以下'
              "
            >
              <v-btn
                @click="poaImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>
            </v-row>

            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以下'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForRegularCars.transferCertificate"
                  label="代表相続人の"
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上'
                "
                v-model="requiredDocumentsForRegularCars.transferCertificateIsFillIn"
                label="ご記入"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上'
                "
                v-model="requiredDocumentsForRegularCars.transferCertificateIsOfficialSeal"
                label="実印"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以上'
                "
                v-model="requiredDocumentsForRegularCars.transferCertificateSealCertificateOfRepresentativeHeir"
                label="印鑑証明"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForRegularCars.transferCertificateIsFillIn&&
                                          requiredDocumentsForRegularCars.transferCertificateIsOfficialSeal&&
                                          requiredDocumentsForRegularCars.transferCertificateSealCertificateOfRepresentativeHeir
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <p class="explanation">
                ・代表相続人の<b>実印</b>が必要になります。　<br />
                　<br />
                ！他書類で印鑑証明を頂いている場合は印鑑証明１枚のみで併用頂けます。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-btn
                @click="openModal('譲渡証明書（代表相続人）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以上'
              "
            >
              <v-btn
                @click="transferCertificateImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>
            </v-row>

            <v-row
              class="mt-5 justify-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以下'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForRegularCars.transferCertificate"
                  label="相続人全員の"
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
                "
                v-model="requiredDocumentsForRegularCars.transferCertificateIsFillIn"
                label="ご記入"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
                "
                v-model="requiredDocumentsForRegularCars.transferCertificateIsOfficialSeal"
                label="実印"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-if="
                  this.passedAwayRequiredDocuments.purchasePriceKubun ===
                  '10万円以下'
                "
                v-model="requiredDocumentsForRegularCars.transferCertificateSealCertificateOfRepresentativeHeir"
                label="印鑑証明"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForRegularCars.transferCertificateIsFillIn&&
                                          requiredDocumentsForRegularCars.transferCertificateIsOfficialSeal&&
                                          requiredDocumentsForRegularCars.transferCertificateSealCertificateOfRepresentativeHeir
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以下'
              "
            >
              <p class="explanation">
                ・相続人全員の<b>実印</b>が必要になります。　<br />
                　<br />
                ！相続人全員の委任状で印鑑証明を頂いている場合、印鑑証明は相続人全員それぞれ１枚のみで併用頂けます。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以下'
              "
            >
              <v-btn
                @click="openModal('譲渡証明書（相続人全員）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                this.passedAwayRequiredDocuments.purchasePriceKubun ===
                '10万円以下'
              "
            >
              <v-btn
                @click="transferCertificateImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>

            </v-row>

            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '下取' &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　〇　下取・必要書類（お客様からお預かりする書類）
              </v-toolbar-title>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　〇　買取・必要書類（お客様からお預かりする書類）
              </v-toolbar-title>
            </v-row>
            <!-- 車検証 -->
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    tradeInPurchaseCommonRequiredDocuments.vehicleInspectionCertificate
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-model="tradeInPurchaseCommonRequiredDocuments.vehicleInspectionCertificateStorage"
                label="お預かり"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': tradeInPurchaseCommonRequiredDocuments.vehicleInspectionCertificateStorage
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・お客様が乗られているお車の情報が記録されている用紙です。　<br />
                <br />
                　主に車検証入れの中に保管されています。　<br />
                　ご成約頂いたお車の納車日当日に車検証をお預かりしてください。　<br />
                <br />
                ！車検証の住所と印鑑証明の住所が違う場合は<b>住民票</b>が必要になります。　
              </p>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・お客様が乗られているお車の情報が記録されている用紙です。　<br />
                <br />
                　主に車検証入れの中に保管されています。　<br />
                　買取でお車をお預かりする当日に車検証をお預かりしてください。　<br />
                <br />
                ！車検証の住所と印鑑証明の住所が違う場合は<b>住民票</b>が必要になります。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車')
              "
            >
              <p>（新）</p>
              <v-btn
                @click="openModal('普通車（新）車検証見本.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車') 
              "
            >
              <p>（旧）</p>
              <v-btn
                @click="openModal('普通車（旧）車検証見本.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-btn
                @click="openModal('軽自動車車検証見本.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車')
              "
            >
              <p>　</p>
              <v-btn
                href="https://www.denshishakensho-portal.mlit.go.jp"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車'
              "
            >
              <v-btn
                href="https://www.keikenkyo.or.jp"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>

            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <!-- 自賠責保険証 -->
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    tradeInPurchaseCommonRequiredDocuments.compulsoryAutomobileLiabilityInsuranceCertificate
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-model="tradeInPurchaseCommonRequiredDocuments.compulsoryAutomobileLiabilityInsuranceCertificateStorage"
                label="お預かり"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': tradeInPurchaseCommonRequiredDocuments.compulsoryAutomobileLiabilityInsuranceCertificateStorage
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・自賠責保険の情報が記録されている用紙です。　<br />
                <br />
                　主に車検証入れの中に保管されています。　<br />
                　ご成約頂いたお車の納車日当日に自賠責保険証をお預かりしてください。　<br />
              </p>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・自賠責保険の情報が記録されている用紙です。　<br />
                <br />
                　主に車検証入れの中に保管されています。　<br />
                　買取でお車をお預かりする当日に自賠責保険証をお預かりしてください。　<br />
              </p>
            </v-row>
            <v-row class="icon-ml">
              <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
              >
              <v-btn
                @click="compulsoryAutomobileLiabilityInsuranceCertificateModal = true"
                density="compact"
                icon="mdi-help"
              ></v-btn>
              </v-col>
              <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-btn
                href="https://www.mlit.go.jp/jidosha/jibaiseki/"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
            </v-row>

            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <!-- リサイクル券 -->
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    tradeInPurchaseCommonRequiredDocuments.recyclingTicket
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-model="tradeInPurchaseCommonRequiredDocuments.automobileLiabilityInsuranceApprovalClaimFormStorage"
                label="お預かり"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': tradeInPurchaseCommonRequiredDocuments.automobileLiabilityInsuranceApprovalClaimFormStorage
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・車を解体する際にかかる「リサイクル料金」を支払ったことを証明する用紙です。　<br />
                <br />
                　主に車検証入れの中に保管されています。　<br />
                　ご成約頂いたお車の納車日当日にリサイクル券をお預かりしてください。　
              </p>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・車を解体する際にかかる「リサイクル料金」を支払ったことを証明する用紙です。　<br />
                <br />
                　主に車検証入れの中に保管されています。<br />
                　買取でお車をお預かりする当日にリサイクル券をお預かりしてください。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-btn
                @click="openModal('リサイクル券見本.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-btn
                href="http://www.jars.gr.jp/"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
            </v-row>

            <!-- 普通車・納税証明書 -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.nameChangeDeletionKubun === '名変' ||
                 this.tradeInPurchase.nameChangeDeletionKubun === '抹消') &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                 this.tradeInPurchase.ownershipKubun === 'アンフィニ所有' ||
                 this.tradeInPurchase.ownershipKubun === '交換コーナー利用' ||
                 this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.nameChangeDeletionKubun === '名変' ||
                 this.tradeInPurchase.nameChangeDeletionKubun === '抹消') &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                 this.tradeInPurchase.ownershipKubun === 'アンフィニ所有' ||
                 this.tradeInPurchase.ownershipKubun === '交換コーナー利用' ||
                 this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    requiredDocumentsForRegularCars.taxPaymentCertificate
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-model="requiredDocumentsForRegularCars.taxPaymentCertificateStorage"
                label="お預かり"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForRegularCars.taxPaymentCertificateStorage
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '下取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.nameChangeDeletionKubun === '名変' ||
                 this.tradeInPurchase.nameChangeDeletionKubun === '抹消') &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                 this.tradeInPurchase.ownershipKubun === 'アンフィニ所有' ||
                 this.tradeInPurchase.ownershipKubun === '交換コーナー利用' ||
                 this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <p class="explanation">
                ・自動車税のお支払いを証明するための用紙です。　<br />
                <br />
                　主に車検証入れの中に保管されています。<br />
                　ご成約頂いたお車の納車日当日に納税証明書をお預かりしてください。　<br />
                <br />
                ！自動車税のお支払請求は毎年4月に届きます。　<br />
              </p>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.nameChangeDeletionKubun === '名変' ||
                 this.tradeInPurchase.nameChangeDeletionKubun === '抹消') &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                 this.tradeInPurchase.ownershipKubun === 'アンフィニ所有' ||
                 this.tradeInPurchase.ownershipKubun === '交換コーナー利用' ||
                 this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <p class="explanation">
                ・自動車税のお支払いを証明するための用紙です。　<br />
                <br />
                　主に車検証入れの中に保管されています。<br />
                　買取でお車をお預かりする当日に納税証明書をお預かりしてください。　<br />
                <br />
                ！自動車税のお支払請求は毎年4月に届きます。　<br />
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.nameChangeDeletionKubun === '名変' ||
                 this.tradeInPurchase.nameChangeDeletionKubun === '抹消') &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                 this.tradeInPurchase.ownershipKubun === 'アンフィニ所有' ||
                 this.tradeInPurchase.ownershipKubun === '交換コーナー利用' ||
                 this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-btn
                @click="openModal('納税証明書見本.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.nameChangeDeletionKubun === '名変' ||
                 this.tradeInPurchase.nameChangeDeletionKubun === '抹消') &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                 this.tradeInPurchase.ownershipKubun === 'アンフィニ所有' ||
                 this.tradeInPurchase.ownershipKubun === '交換コーナー利用' ||
                 this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-btn
                href="https://www.city.hiroshima.lg.jp/site/faq/15007.html"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>

            </v-row>


            <!-- 普通車・その他所有の委任状 -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取')&&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'

              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取')&&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForRegularCars.powerOfAttorney"
                  label="所有権解除"
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-model="requiredDocumentsForRegularCars.powerOfAttorneyStorage"
                label="お預かり"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForRegularCars.powerOfAttorneyStorage
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取')&&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <p class="explanation">
                ・車検証に記載されている現所有者様に所有権の解除をご依頼した後に　<br />
                　発行される<b>委任状</b>と<b>印鑑証明</b>です。　<br />
                <br />
                ！印鑑証明は<b>搬入後1ヶ月が有効期限</b>です。<br />
                <br />
                ！車検証の住所と印鑑証明の住所が違う場合は<b>住民票</b>が必要になります。　<br />
              </p>
            </v-row>

            <!-- 軽自動車・申請依頼書 -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    requiredDocumentsForLightVehicles.applicationRequestForm
                  "
                  label="所有権解除"
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-model="requiredDocumentsForRegularCars.applicationRequestFormStorage"
                label="お預かり"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForRegularCars.applicationRequestFormStorage
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取')&&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <p class="explanation">
                ・車検証に記載されている現所有者様に所有権の解除をご依頼した後に　<br />
                　発行される<b>申請依頼書</b>です。
              </p>
            </v-row>

            <!-- 普通車・譲渡証明書 -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForRegularCars.transferCertificate"
                  label="所有権解除"
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-model="requiredDocumentsForRegularCars.transferCertificateStorage"
                label="お預かり"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForRegularCars.transferCertificateStorage
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <p class="explanation">
                ・車検証に記載されている現所有者様に所有権の解除をご依頼した後に　<br />
                　発行される<b>譲渡証明書</b>です。
              </p>
            </v-row>

            <!-- 軽自動車・承諾書 -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForLightVehicles.letterOfConsent"
                  label="所有権解除"
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-model="requiredDocumentsForLightVehicles.letterOfConsentStorage"
                label="お預かり"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': requiredDocumentsForLightVehicles.letterOfConsentStorage
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'
              "
            >
              <p class="explanation">
                ・車検証に記載されている現所有者様に所有権の解除をご依頼した後に　<br />
                　発行される書類です。　<br />
                <br />
                ！間違えて処分してしまう人が多発していますので注意です。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === 'その他所有'

              "
            >
              <v-btn
                @click="openModal('軽自動車承諾書見本.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            </v-row>


            <!-- 本人確認書類のコピー -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="purchaseDocuments.copyOfIdentityDocument"
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
              <v-checkbox
                v-model="purchaseDocuments.copyOfIdentityDocumentStorage"
                label="お預かり"
              >
              </v-checkbox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-6">
              <div
                class="tax-declaration-completed ml-15"
                :class="{
                  'is-fill-in-completed': purchaseDocuments.copyOfIdentityDocumentStorage
                }"
              >
                完了
              </div>
              </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・お車の買取の際は<b>免許証</b>または<b>住民票</b>のコピーが必要になります。　
              </p>
            </v-row>

            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　〇　下取・必要書類（お客様にご記入頂く書類）
              </v-toolbar-title>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　〇　買取・必要書類（お客様にご記入頂く書類）
              </v-toolbar-title>
            </v-row>
            <!-- 買取明細書 -->
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="purchaseDocuments.purchaseDetails"
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・お車を買取させて頂く際に必要になる明細書です。　<br>
                <br>
                ！<b>リサイクル預託金が1万円以上</b>の場合、収入印紙の貼り付け及び割印が必要になります。<br>
                　店長様の確認漏れが注意です。
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-btn
                @click="purchaseDetailsModal = true"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            </v-row>


            <!-- 振込先確認書 -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="purchaseDocuments.confirmationOfTransferDestination"
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・お車を買取させて頂いた際にご提示した買取金額の振込先を確認する為の書類です。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-btn
                @click="confirmationOfTransferDestinationModal = true"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            </v-row>


            <!-- 普通車・委任状 -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車')
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForRegularCars.powerOfAttorney"
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '下取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <p class="explanation">
                ・下取に伴うお預かりしたお車の手続きを代行させて頂くための書類です。　<br />
                <br />
                　所有権が<b>本人所有</b>の場合は<b>実印</b>と<b>印鑑証明</b>が必要になります。　<br />
                <br />
                ！印鑑証明は<b>搬入後1ヶ月が有効期限</b>です。<br />
                <br />
                ！車検証の住所と印鑑証明の住所が違う場合は<b>住民票</b>が必要になります。　<br />
                <br />
                ！成約時登録の際に頂いた印鑑証明は併用することができません。　
              </p>
            </v-row>

            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <p class="explanation">
                ・買取に伴うお預かりしたお車の手続きを代行させて頂くための書類です。　<br />
                <br />
                　所有権が<b>本人所有</b>の場合は<b>実印</b>と<b>印鑑証明</b>が必要になります。　<br />
                <br />
                ！印鑑証明は<b>搬入後1ヶ月が有効期限</b>です。　<br />
                <br />
                ！車検証の住所と印鑑証明の住所が違う場合は<b>住民票</b>が必要になります。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <v-btn
                @click="openModal('委任状（買取下取）.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <v-btn
                @click="poaImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>
            </v-row>

            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>

            <!-- 軽自動車・申請依頼書 -->
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    requiredDocumentsForLightVehicles.applicationRequestForm
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '下取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <p class="explanation">
                ・下取に伴うお預かりしたお車の手続きを代行させて頂くための書類です。　<br />
                <br />
                　<b>認印</b>と<b>住民票</b>が必要になります。　<br />
                <br />
                ！成約時登録の際に頂いた住民票は併用することができません。　
              </p>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <p class="explanation">
                ・買取に伴うお預かりしたお車の手続きを代行させて頂くための書類です。　<br />
                <br />
                　<b>認印</b>と<b>住民票</b>が必要になります。　<br />
                <br />
                ！成約時登録の際に頂いた住民票は併用することができません。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <v-btn
                @click="openModal('申請依頼書（買取下取）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <v-btn
                @click="lightCarDocumentsImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === '本人所有'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>

            <!-- 自賠責承認請求書 -->
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    tradeInPurchaseCommonRequiredDocuments.automobileLiabilityInsuranceApprovalClaimForm
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '下取' &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・下取のお車に付帯されている自賠責保険の権利を弊社に変更頂くための書類です。　<br />
                <br />
                　説明例：お預かりしたお車の自賠責保険の請求がお客様に届かないようにするための書類です。　
              </p>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・買取のお車に付帯されている自賠責保険の権利を弊社に変更頂くための書類です。　<br />
                <br />
                　説明例：お預かりしたお車の自賠責保険の請求がお客様に届かないようにするための書類です。　
              </p>
            </v-row>
            <v-row class="icon-ml">
              <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
              >
              <v-btn
                @click="automobileLiabilityInsuranceApprovalClaimFormModal = true"
                density="compact"
                icon="mdi-help"
              ></v-btn>
              </v-col>
            </v-row>


            <!-- 普通車・譲渡証明書 -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                  this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                  this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForRegularCars.transferCertificate"
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '下取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                  this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <p class="explanation">
                ・お客様からお車の所有権利を譲渡頂くための書類になります。　<br />
                　<b>実印</b>と<b>印鑑証明</b>が必要です。<br />
                <br />
                ！他書類で印鑑証明を頂いている場合は印鑑証明１枚のみで併用頂けます。　
              </p>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                  this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <p class="explanation">
                ・お客様からお車の所有権利を譲渡頂くための書類になります。　<br />
                　<b>実印</b>と<b>印鑑証明</b>が必要です。<br />
                <br />
                ！他書類で印鑑証明を頂いている場合は印鑑証明１枚のみで併用頂けます。　
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                  this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-btn
                @click="openModal('譲渡証明書記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                (this.tradeInPurchase.ownershipKubun === '本人所有' ||
                  this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-btn
                @click="transferCertificateImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
            </v-col>
            </v-row>


            <!-- 債権譲渡通知書 -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                  this.tradeInPurchase.nameChangeDeletionKubun === '名変') ||
                (this.tradeInPurchase.nameChangeDeletionKubun === '抹消' &&
                  this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                  (this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                  this.tradeInPurchase.nameChangeDeletionKubun === '名変') ||
                (this.tradeInPurchase.nameChangeDeletionKubun === '抹消' &&
                  this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    requiredDocumentsForRegularCars.noticeOfAssignmentOfClaim
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '下取' &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                 this.tradeInPurchase.nameChangeDeletionKubun === '名変') ||
                (this.tradeInPurchase.nameChangeDeletionKubun === '抹消' &&
                 this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <p class="explanation">
                ・お預かりするお車の自動車税を処理するための下取時に必要になる書類です。　<br />
                <br />
                　詳しい説明：お客様（➀）からお車をお預かりした際に自動車税の支払い権は弊社になります。　<br />
                　　　　　　　↑例：7月に車をお預かりした場合、8月～来年4月の9カ月分を弊社がお支払いします。　<br />
                　　　　　　　ですが、弊社がお客様（➀）からお預かりしたお車を更に次のお客様（➁）に中古車として売却する際には　<br />
                　　　　　　　債権譲渡通知書を頂いていないと次のお客様（➁）に売却したのち弊社に返金されるはずの自動車税は　<br />
                　　　　　　　お客様（➀）に返金されてしまうため必要になります。
              </p>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                 this.tradeInPurchase.nameChangeDeletionKubun === '名変') ||
                (this.tradeInPurchase.nameChangeDeletionKubun === '抹消' &&
                 this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <p class="explanation">
                ・お預かりするお車の自動車税を処理するための買取時に必要になる書類です。　<br />
                <br />
                　詳しい説明：お客様（➀）からお車をお預かりした際に自動車税の支払い権は弊社になります。　<br />
                　　　　　　　↑例：7月に車をお預かりした場合、8月～来年4月の9カ月分を弊社がお支払いします。　<br />
                　　　　　　　ですが、弊社がお客様（➀）からお預かりしたお車を更に次のお客様（➁）に中古車として売却する際には　<br />
                　　　　　　　債権譲渡通知書を頂いていないと次のお客様（➁）に売却したのち弊社に返金されるはずの自動車税は　<br />
                　　　　　　　お客様（➀）に返金されてしまうため必要になります。
              </p>
            </v-row>
            <v-row class="icon-ml">
              <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                  this.tradeInPurchase.nameChangeDeletionKubun === '名変') ||
                (this.tradeInPurchase.nameChangeDeletionKubun === '抹消' &&
                  this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
              >
              <v-btn
                @click="noticeOfAssignmentOfClaimModal = true"
                density="compact"
                icon="mdi-help"
              ></v-btn>
              </v-col>
              <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                  this.tradeInPurchase.nameChangeDeletionKubun === '名変') ||
                (this.tradeInPurchase.nameChangeDeletionKubun === '抹消' &&
                  this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-btn
                @click="noticeOfAssignmentOfClaimImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
              </v-col>
              <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                  this.tradeInPurchase.nameChangeDeletionKubun === '名変') ||
                (this.tradeInPurchase.nameChangeDeletionKubun === '抹消' &&
                  this.tradeInPurchase.ownershipKubun === 'その他所有')
              "
            >
              <v-btn
                href="https://www.bengohiroba.jp/debt/article22854.html"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>
            </v-row>

            <!-- 軽自動車・税廃 -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForLightVehicles.taxAbolition1"
                  label="１．"
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForLightVehicles.taxAbolition2"
                  label="２．"
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="requiredDocumentsForLightVehicles.taxAbolition3"
                  label="３．"
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '下取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車'
              "
            >
              <p class="explanation">
                ・下取の際に軽自動車税を処理するための書類になります。　<br />
                　税申告書・納税済証・税廃の３枚がセットになります。　<br />
                <br />
                ！税申告書・納税済証・税廃は複写になるように３枚綴り（つづり）になっていますが、　<br />
                　税廃は複写にならないよう税申告書・納税済証からは必ず切り離してお客様にご記入を　<br />
                　頂いてください。（詳しくは記入例【？】をご覧ください。）
              </p>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車'
              "
            >
              <p class="explanation">
                ・買取の際に軽自動車税を処理するための書類になります。　<br />
                　税申告書・納税済証・税廃の３枚がセットになります。　<br />
                <br />
                ！税申告書・納税済証・税廃は複写になるように３枚綴り（つづり）になっていますが、　<br />
                　税廃は複写にならないよう税申告書・納税済証からは必ず切り離してお客様にご記入を　<br />
                　頂いてください。（詳しくは記入例【？】をご覧ください。）
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車'
              "
            >
              <p>１．</p>
              <v-btn
                @click="openModal('軽自動車税申告書（青）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車'
              "
            >
              <p>２．</p>
              <v-btn
                @click="openModal('軽自動車税納税済証記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車'
              "
            >
              <p>３．</p>
              <v-btn
                @click="openModal('軽自動車税申告書（廃車）記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車'
              "
            >
              <p>　</p>
              <v-btn
                href="https://www.city.hiroshima.lg.jp/soshiki/26/1889.html"
                target="_blank"
                density="compact"
                icon="mdi-search-web"
              ></v-btn>
            </v-col>

            </v-row>


            <!-- 買取・下取同意書 -->
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    tradeInPurchaseCommonRequiredDocuments.purchaseTradeInAgreement
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '下取' &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・お客様からお預かりするお車の下取に同意頂くための書類です。　<br />
              </p>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・お客様からお預かりするお車の買取に同意頂くための書類です。　<br />
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-btn
                @click="openModal('買取下取同意書記入例.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-btn
                @click="purchaseTradeInAgreementImg"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
              </v-col>
            </v-row>


            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '下取' &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　〇　下取・必要書類（社員が記入、入力、準備する書類）
              </v-toolbar-title>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　〇　買取・必要書類（社員が記入、入力、準備する書類）
              </v-toolbar-title>
            </v-row>

            <!-- 所有権解除依頼 -->
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車') &&
                this.tradeInPurchase.ownershipKubun === '交換コーナー利用'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    tradeInPurchaseCommonRequiredDocuments.ownershipReleaseRequest
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' &&
                this.tradeInPurchase.ownershipKubun === '交換コーナー利用'
              "
            >
              <p class="explanation">
                ・お客様の車検証を確認してお車の現所有者様に所有権を解除頂くよう電話などでご依頼してください。　<br />
                <br />
                　所有権の解除が完了すると現所有者の<b>委任状</b>と<b>印鑑証明</b>が発行されますので郵送などでお預かりしてください。　<br />
                　↑主にモータースや他社、他銘柄など
              </p>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車' &&
                this.tradeInPurchase.ownershipKubun === '交換コーナー利用'
              "
            >
              <p class="explanation">
                ・お客様の車検証を確認してお車の現所有者様に所有権を解除頂くよう電話などでご依頼してください。　<br />
                <br />
                　所有権の解除が完了すると現所有者の<b>申請依頼書</b>と<b>軽自動車承諾書</b>が発行されますので郵送などでお預かりしてください。　<br />
                　↑主にモータースや他社、他銘柄など
              </p>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車') &&
                this.tradeInPurchase.ownershipKubun === '交換コーナー利用'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>

            <!-- 自動車税支払伺書 -->

            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車'
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="
                    requiredDocumentsForRegularCars.motorVehicleTaxPaymentSlip
                  "
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '下取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車'
              "
            >
              <p class="explanation">
                ・お客様から下取でお車をお預かりした際に残りの自動車税を返金するための書類です。　<br />
                <br />
                　例：7月にお車をお預かりした場合、8月～来年4月の9カ月分を月割りで返金いたします。　
              </p>
            </v-row>
            <v-row
              v-if="
                this.tradeInPurchase.tradeInPurchaseKubun === '買取' &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車'
              "
            >
              <p class="explanation">
                ・お客様から買取でお車をお預かりした際に残りの自動車税を返金するための書類です。　<br />
                <br />
                　例：7月にお車をお預かりした場合、8月～来年4月の9カ月分を月割りで返金いたします。　
              </p>
            </v-row>
            <v-row class="icon-ml">
              <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車'
              "
              >
              <v-btn
                @click="taxPaymentSlipModal = true"
                density="compact"
                icon="mdi-help"
              ></v-btn>
              </v-col>
              <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車'
              "
            >
            <v-btn
                href="自動車税支払伺書.xlsx"
                target="_blank"
                density="compact"
                icon="mdi-printer"
              ></v-btn>
              </v-col>

            </v-row>
            <v-row
            v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
            </v-row>

            <!-- カーチェックシート -->
            <v-row
              class="mt-5 justify-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-col cols="2" class="mt-5">
                <v-combobox
                  v-model="tradeInPurchaseCommonRequiredDocuments.carCheckSheet"
                  label=""
                  :items="[]"
                  variant="outlined"
                  readonly
                ></v-combobox>
              </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
              <v-col cols="2" class="mt-5"> </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <p class="explanation">
                ・お車を査定をした際に発行することが出来る書類です。　<br>
                　車の状態、査定金額が記載されています。
              </p>
            </v-row>
            <v-row class="icon-ml">
            <v-col
              cols="1"
              class="mt-3 d-flex align-center"
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-btn
                @click="openModal('カーチェックシート.jpg')"
                density="compact"
                icon="mdi-help"
              ></v-btn>
            </v-col>
            </v-row>
            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　〇　自動車保険
              </v-toolbar-title>
            </v-row>
            <v-row
            class="mt-10 justify-center"
            v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
            <v-col cols="2" class="">
              <v-select
                @update:modelValue="insuranceIncludedChange"
                v-model="tradeInPurchaseCommonRequiredDocuments.insuranceIncluded"
                label="保険付帯"
                :items="['', '有', '無']"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
            </v-col>
           </v-row>
           <v-row
             v-if="
               this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'
               "
            >
              <v-divider class="mt-5 separator"></v-divider>
          </v-row>
           <v-row 
            class="mt-5 justify-center"
            v-if="
              this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'
              "
           >
            <v-col
              cols="2"
              class=""
            >
              <v-text-field
                class="test"
                :class="{
                  'completedDate-input': !tradeInPurchaseCommonRequiredDocuments.cabinetInput,
                }"
                type="date"
                v-model="tradeInPurchaseCommonRequiredDocuments.cabinetInput"
                label="移動受付キャビネット入力"
              ></v-text-field>
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'

              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'
                "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'
                "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'
                "
            >
            </v-col>
          </v-row>
          <v-row
             v-if="
               this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'
               "
            >
              <v-divider class="mt-5 separator"></v-divider>
          </v-row>
          <v-row 
            class="mt-5 justify-center"
            v-if="
              this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'
              "
           >
            <v-col
              cols="2"
              class=""
            >
              <v-text-field
                class="test"
                :class="{
                  'completedDate-input': !tradeInPurchaseCommonRequiredDocuments.dateOfCompletionOfDocumentSubmissionProcedure,
                }"
                type="date"
                v-model="tradeInPurchaseCommonRequiredDocuments.dateOfCompletionOfDocumentSubmissionProcedure"
                label="書類提出・手続き完了"
              ></v-text-field>
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'

              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'
                "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'
                "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                this.tradeInPurchaseCommonRequiredDocuments.insuranceIncluded === '有'
                "
            >
            </v-col>
          </v-row>
          <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' 
              "
            >
              <v-toolbar-title class="mt-5 d-flex align-center start">
                　〇　コネクティッドサービス解約
              </v-toolbar-title>
            </v-row>
            <v-row
            class="mt-10 justify-center"
            v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' 
              "
            >
            <v-col cols="2" class="">
              <v-select
                @update:modelValue="connectedServiceSubscriptionStatusChange"
                v-model="requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus"
                label="加入状況"
                :items="['', '加入車', '未加入車']"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' 
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' 
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' 
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                this.tradeInPurchase.normalCarLightCarKubun === '普通車' 
              "
            >
            </v-col>
           </v-row>
           <v-row
             v-if="
              this.requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus === '加入車'
              "
            >
              <v-divider class="mt-5 separator"></v-divider>
          </v-row>
           <v-row 
            class="mt-5 justify-center"
            v-if="
              this.requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus === '加入車'
              "
           >
            <v-col
              cols="2"
              class=""
            >
              <v-text-field
                class="test"
                :class="{
                  'completedDate-input': !requiredDocumentsForRegularCars.connectedServiceCancellationDate,
                }"
                type="date"
                v-model="requiredDocumentsForRegularCars.connectedServiceCancellationDate"
                label="コネクティッドサービス解約日"
              ></v-text-field>
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
              this.requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus === '加入車'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
              this.requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus === '加入車'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
              this.requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus === '加入車'
              "
            >
            </v-col>
            <v-col
              cols="2"
              class=""
              v-if="
              this.requiredDocumentsForRegularCars.connectedServiceSubscriptionStatus === '加入車'
              "
            >
            </v-col>
          </v-row>

            <v-row
              v-if="
                (this.tradeInPurchase.tradeInPurchaseKubun === '下取' ||
                  this.tradeInPurchase.tradeInPurchaseKubun === '買取') &&
                (this.tradeInPurchase.normalCarLightCarKubun === '普通車' ||
                  this.tradeInPurchase.normalCarLightCarKubun === '軽自動車')
              "
            >
              <v-toolbar-title class="mt-16 d-flex align-center goal">
                　▲　お手続きは以上になります。お時間頂きありがとうございました。
              </v-toolbar-title>
            </v-row>
          </div>
        </div>
      </div>
      <div class="whole-bottom"></div>
      <div class="footer"></div>
      <!-- <v-row>
        <v-toolbar-title class=" d-flex align-center memo">
          　▼メモ
        </v-toolbar-title>
      </v-row> -->

      <!-- <v-row class="mt-5" v-for="(memo, index) in memos" :key="index">
        <v-col>
        {{ index }}
      </v-col>
        <v-col cols="2" class="">
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
      <ModalImg
        :isOpen="isOpenModal"
        :imgPath="modalImgPath"
        @update="isOpenModal = $event"
      >
      </ModalImg>
      <!-- 委任状（実印）modal -->
      <!-- <v-dialog v-model="poaRegisteredSealModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/委任状（実印）記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- 委任状（認印）modal -->
      <!-- <v-dialog v-model="poaStampingModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/委任状（認印）記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- OSS（実印）modal -->
      <!-- <v-dialog v-model="ossRegisteredSealModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/OSS（実印）記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- OSS（認印）modal -->
      <!-- <v-dialog v-model="ossStampingModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/OSS（認印）記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- 申請依頼書（所有者・使用者）modal -->
      <!-- <v-dialog v-model="lightCarDocumentsOwnerAndUserModal" max-width="70%">
        <v-card>
          <img
            class="modal-img"
            src="/申請依頼書（所有者・使用者）記入例.jpg"
          />
        </v-card>
      </v-dialog> -->
      <!-- 申請依頼書（使用者）modal -->
      <!-- <v-dialog v-model="lightCarDocumentsUserModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/申請依頼書（使用者）記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- 保管場所証明申請書modal -->
      <!-- <v-dialog v-model="NCgarageVerificationModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/保管場所証明申請書記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- 保管場所届出書modal -->
      <!-- <v-dialog v-model="LCgarageVerificationKubun" max-width="70%">
        <v-card>
          <img class="modal-img" src="/保管場所届出書記入例.jpg" />
        </v-card>
      </v-dialog> -->

      <!-- 自認書modal -->
      <!-- <v-dialog v-model="selfCertification" max-width="70%">
        <v-card>
          <img class="modal-img" src="/自認書記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- 使用承諾証modal -->
      <!-- <v-dialog v-model="ConsentToUseModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/使用承諾証記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- 配置図modal -->
      <!-- <v-dialog v-model="arrangementDiagramNameModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/配置図記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- 希望番号伺書modal -->
      <v-dialog v-model="desiredNumberModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/希望番号伺書記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- ETC申込用紙modal -->
      <!-- <v-dialog v-model="etcModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/ETC申込用紙記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- ETC2.0申込用紙modal -->
      <!-- <v-dialog v-model="etc2Modal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/ETC2.0申込用紙記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- 新車延長保証modal -->
      <!-- <v-dialog v-model="newCarExtendedWarrantyModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/延長保証記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- 中古車延長保証modal -->
      <v-dialog v-model="usedCarExtendedWarrantyModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/さわやかプラス記入例.jpg" />
        </v-card>
      </v-dialog>
      <!-- メンテナンスパック申込書modal -->
      <!-- <v-dialog v-model="maintenancePackModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/メンテナンスパック申込用紙記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- 税申告書modal -->
      <!-- <v-dialog v-model="taxDeclarationNameModal" max-width="70%">
        <v-card>
          <img class="modal-img" src="/税申告書記入例.jpg" />
        </v-card>
      </v-dialog> -->
      <!-- 買取・下取modal -->
      <v-dialog v-model="tradeInPurchaseModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/下取・買取書類確認書.jpg" />
        </v-card>
      </v-dialog>
      <v-dialog v-model="inheritanceDivisionAgreementModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/遺産分割協議書記入例.jpg" />
        </v-card>
      </v-dialog>
      <v-dialog v-model="compulsoryAutomobileLiabilityInsuranceCertificateModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/自賠責保険証見本.jpg" />
        </v-card>
      </v-dialog>
      <v-dialog v-model="purchaseDetailsModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/買取明細書記入例.jpg" />
        </v-card>
      </v-dialog>
      <v-dialog v-model="confirmationOfTransferDestinationModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/振込先確認書記入例.jpg" />
        </v-card>
      </v-dialog>
      <v-dialog v-model="automobileLiabilityInsuranceApprovalClaimFormModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/自賠責承認請求書記入例.jpg" />
        </v-card>
      </v-dialog>
      <v-dialog v-model="noticeOfAssignmentOfClaimModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/債権譲渡通知書記入例.jpg" />
        </v-card>
      </v-dialog>
      <v-dialog v-model="taxPaymentSlipModal" max-width="40%">
        <v-card>
          <img class="modal-img" src="/自動車税支払伺書記入例.jpg" />
        </v-card>
      </v-dialog>






      <div class="whole-bottom"></div>
      <div class="footer"><p class="copyright">Copyright🄫 2020 ENFINI HIROSHIMA. All Rights Reserved.</p></div>
    </v-app>
  </div>
</template>

<style lang="scss">
.body {
  overflow-x: hidden;
}
.logo-top {
  margin-top: 10%;
}
.logo-div {
  max-width: 30%;
  margin-left: 7%;
}
.logo {
  width: 100%;
  height: 100%;
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
.clear-btn {
  left: 10%;
}
.icon-ml {
  margin-left: 8%;
}
.start {
  background: #808080;
  color: #ffffff;
  border-radius: 5px;
  max-width: 83%;
  margin-left: 8%;
}
.supporting-sentences {
  margin-left: 8%;
}
.normalCarDocuments {
  background: #4db56a;
  color: #ffffff;
  border-radius: 5px;
  max-width: 83%;
  margin-left: 8%;
}
.normalCarDocuments-completedDate {
  color: #ff0000;
}
.lightCarDocuments {
  background: #4db56a;
  color: #ffffff;
  border-radius: 5px;
  max-width: 83%;
  margin-left: 8%;
}
.lightCarDocuments-completedDate {
  color: #ff0000;
}
.normalCarDocumentsGarageVerification {
  background: #6e6eff;
  color: #ffffff;
  border-radius: 5px;
  max-width: 83%;
  margin-left: 8%;
}
.normalCarDocumentsGarageVerification-completedDate {
  color: #ff0000;
}
.lightCarDocumentsGarageVerification {
  background: #6e6eff;
  color: #ffffff;
  border-radius: 5px;
  max-width: 83%;
  margin-left: 8%;
}
.lightCarDocumentsGarageVerification-completedDate {
  color: #ff0000;
}
.other-documents {
  background: #fc9325;
  color: #ffffff;
  border-radius: 5px;
  max-width: 83%;
  margin-left: 8%;
}

.deliveryDate {
  background: #ff3f3f;
  color: #ffffff;
  border-radius: 5px;
  max-width: 83%;
  margin-left: 8%;
}
.insurance {
  background: #33ccff;
  color: #ffffff;
  border-radius: 5px;
  max-width: 83%;
  margin-left: 8%;
}
.credit {
  background: #e6b422;
  color: #ffffff;
  border-radius: 5px;
  max-width: 83%;
  margin-left: 8%;
}
.goal {
  background: #808080;
  color: #ffffff;
  border-radius: 5px;
  max-width: 83%;
  margin-left: 8%;
}
.memo {
  background: #262626;
  color: #ffffff;
  border-radius: 5px;
  max-width: 83%;
  margin-left: 8%;
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

.insurance-completedDate {
  color: #ff0000;
}

.taxDeclaration-completedDate {
  color: #ff0000;
}

.delivery-deliveryDate {
  color: #ff0000;
}
.orderDate {
  color: #ff0000;
}
.userCode {
  color: #ff0000;
}

.credit-completedDate {
  color: #ff0000;
}

.whole-bottom {
  margin-bottom: 150px;
}
.explanation {
  background-color: #ffecb8;
  border-radius: 3px;
  margin-left: 9%;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45px;
  background-color: #101010;
  justify-content: center;
  display:flex;
  align-items:center;
  color: #ffffff;
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
.separator {
  max-width: 83%;
  margin-left: 8%;
}

.buy-trade {
  top: 5%;
}
</style>
