<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      contracts: {
        userCode: "", //ユーザーコード
        orderDate: "", //受注日
        carModel: "", //成約車種
        storeKubun: "", //店舗区分
        managerName: "", //担当者名
        newCarUsedCarKubun: "", //新車・中古区分
        normalCarLightCarKubun: "", //普通車・軽自動車区分
        paymentKubun: "", //支払区分
        tradeInCarKubun: "", //下取車有・買取有・下取買取無区分
        insuranceKubun: "", //（保険）当社加入・他社加入
      },
      credit: {
        creditDocuments: "クレジット書類", //クレジット書類
        isFillIn: "", //ご記入
        isRegisteredSeal: false, //実印（銀行印）
        completedDate: false, //完了日
      },
      normalCarDocuments: {
        poaOssKubun: "", //委任状・OSS・代行不要区分
        isFillIn: "", //ご記入
        isRegisteredSeal: false, //実印（銀行印）
        isSealCertificate: false, //印鑑証明
        isStamping: false, //認印
        isResidentCard: false, //住民票
        completedDate: false, //完了日
      },
      lightCarDocuments: {
        lightCarDocumentsKubun: "", //申請依頼書・代行不要区分
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

      insurance: {
        jocInsuranceCompany: "", //当社加入保険会社
        jacInsuranceCompany: "", //他社加入保険会社
        joiningProcedure: "", //手続き
        confirmationOfMembership: "", //加入確認
        completedDate: false, //完了日
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

    memoField(memo) {
      if (memo.memoField) {
        memo.recordDate = dayjs().format("YYYY-MM-DD");
      } else {
        memo.recordDate = "";
      }
    },

    addMemo() {
      this.memos.push({
        recordDate: "",
        memoField: "",
        promisedDay: "",
      });
    },

    removeMemo(index) {
      this.memos.splice(index, 1);
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
      this.lightCarDocuments.lightCarDocumentsKubun = "";
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

    paymentKubunChange() {
      this.credit.isFillIn = "";
      this.credit.isRegisteredSeal = false;
      this.credit.completedDate = false;
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
      this.lightCarDocuments.lightCarDocumentsKubun = "";
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
    // console.log(this.contracts.normalCarLightCarKubun);
    // console.log(this.normalCarDocuments);
    // console.log(event);
  },
};
</script>

<template>
  <div>
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
        <v-col cols="2" class="mx-14 orderDate">
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

      <v-row class="mt-15" justify="center">
        <v-col cols="2" class="mx-0">
          <v-select
            v-model="contracts.newCarUsedCarKubun"
            label="新車or中古車"
            :items="['', '新車', '中古車']"
            variant="outlined"
          ></v-select>
        </v-col>

        <v-col cols="2" class="mx-1">
          <v-select
            @update:modelValue="normalCarLightCarKubunChange"
            v-model="contracts.normalCarLightCarKubun"
            label="普通車or軽自動車"
            :items="['', '普通車', '軽自動車']"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="2" class="mx-1">
          <v-select
            @update:modelValue="paymentKubunChange"
            v-model="contracts.paymentKubun"
            label="支払"
            :items="['', '現金', 'クレジット', '銀行ローン', '所有権留保']"
            variant="outlined"
          ></v-select>
        </v-col>

        <v-col cols="2" class="mx-1">
          <v-select
            v-model="contracts.tradeInCarKubun"
            label="下取車・買取車"
            :items="['', '下取車有', '買取車有', '無']"
            variant="outlined"
          ></v-select>
        </v-col>

        <v-col cols="2" class="mx-1">
          <v-select
            @update:modelValue="insuranceKubunChange"
            v-model="contracts.insuranceKubun"
            label="保険"
            :items="['', '当社加入', '他社加入', '未加入']"
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-toolbar-title
          class="ml-15 d-flex align-center normalCarDocuments"
          v-if="
            this.contracts.newCarUsedCarKubun === '新車' &&
            this.contracts.normalCarLightCarKubun === '普通車'
          "
        >
          　▼委任状・OSS
        </v-toolbar-title>

        <v-toolbar-title
          class="ml-15 d-flex align-center normalCarDocuments"
          v-if="
            this.contracts.newCarUsedCarKubun === '中古車' &&
            this.contracts.normalCarLightCarKubun === '普通車'
          "
        >
          　▼委任状
        </v-toolbar-title>
      </v-row>
      <v-row
        class="mt-10"
        v-if="
          this.contracts.newCarUsedCarKubun === '中古車' &&
          this.contracts.normalCarLightCarKubun === '普通車'
        "
      >
        <v-col cols="2" class="mx-14">
          <v-select
            @update:modelValue="poaOssKubunChange"
            v-model="normalCarDocuments.poaOssKubun"
            label="委任状"
            :items="['', '委任状', '代行不要']"
            variant="outlined"
          ></v-select>
        </v-col>

        <v-col
          cols="2"
          class="mx-1 d-flex align-center"
          v-if="this.normalCarDocuments.poaOssKubun === '委任状'"
        >
          <v-checkbox
            @change="poaOssKubunCompleted"
            v-model="normalCarDocuments.isFillIn"
            label="記入"
          >
          </v-checkbox>
        </v-col>
        <v-col cols="2" class="mx-1 d-flex align-center">
          <v-checkbox
            @change="poaOssKubunCompleted"
            v-if="
              (this.contracts.paymentKubun === '現金' ||
                this.contracts.paymentKubun === '銀行ローン') &&
              this.normalCarDocuments.poaOssKubun === '委任状'
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
              this.normalCarDocuments.poaOssKubun === '委任状'
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
              this.normalCarDocuments.poaOssKubun === '委任状'
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
              this.normalCarDocuments.poaOssKubun === '委任状'
            "
            v-model="normalCarDocuments.isResidentCard"
            label="住民票"
          >
          </v-checkbox>
        </v-col>

        <v-col
          cols="2"
          class="mx-1 normalCarDocuments-completedDate"
          v-if="this.normalCarDocuments.poaOssKubun === '委任状'"
        >
          <!-- <v-text-field
            :class="{
              'completedDate-input': normalCarDocuments.completedDate != false,
            }"
            type="date"
            v-model="normalCarDocuments.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>

      <v-row
        class="mt-10"
        v-if="
          this.contracts.newCarUsedCarKubun === '新車' &&
          this.contracts.normalCarLightCarKubun === '普通車'
        "
      >
        <v-col cols="2" class="mx-14">
          <v-select
            @update:modelValue="poaOssKubunChange"
            v-model="normalCarDocuments.poaOssKubun"
            label="委任状 or OSS"
            :items="['', '委任状', 'OSS', '代行不要']"
            variant="outlined"
          ></v-select>
        </v-col>

        <v-col
          cols="2"
          class="mx-1 d-flex align-center"
          v-if="
            this.normalCarDocuments.poaOssKubun === '委任状' ||
            this.normalCarDocuments.poaOssKubun === 'OSS'
          "
        >
          <v-checkbox
            @change="poaOssKubunCompleted"
            v-model="normalCarDocuments.isFillIn"
            label="記入"
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
                this.normalCarDocuments.poaOssKubun === 'OSS')
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
                this.normalCarDocuments.poaOssKubun === 'OSS')
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
                this.normalCarDocuments.poaOssKubun === 'OSS')
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
                this.normalCarDocuments.poaOssKubun === 'OSS')
            "
            v-model="normalCarDocuments.isResidentCard"
            label="住民票"
          >
          </v-checkbox>
        </v-col>

        <v-col
          cols="2"
          class="mx-1 normalCarDocuments-completedDate"
          v-if="
            this.normalCarDocuments.poaOssKubun === '委任状' ||
            this.normalCarDocuments.poaOssKubun === 'OSS'
          "
        >
          <!-- <v-text-field
            :class="{
              'completedDate-input': normalCarDocuments.completedDate != false,
            }"
            type="date"
            v-model="normalCarDocuments.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.normalCarDocuments.poaOssKubun === '委任状'"
        >
          <!-- <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.normalCarDocuments.poaOssKubun === 'OSS'"
        >
          <!-- <v-btn
            href="/ininzyou.pdf"
            target="_blank"
            density="compact"
            icon="mdi-printer"
          ></v-btn> -->
        </v-col>
      </v-row>
      <v-row>
        <v-toolbar-title
          class="ml-15 d-flex align-center lightCarDocuments"
          v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
        >
          　▼申請依頼書
        </v-toolbar-title>
      </v-row>

      <v-row
        class="mt-10"
        v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
      >
        <v-col cols="2" class="mx-14">
          <v-select
            @update:modelValue="lightCarDocumentsKubunChange"
            v-model="lightCarDocuments.lightCarDocumentsKubun"
            label="申請依頼書"
            :items="['', '申請依頼書', '代行不要']"
            variant="outlined"
          ></v-select>
        </v-col>

        <v-col
          cols="2"
          class="mx-1 d-flex align-center"
          v-if="this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'"
        >
          <v-checkbox
            @change="lightCarDocumentsKubunCompleted"
            v-model="lightCarDocuments.isFillIn"
            label="記入"
          >
          </v-checkbox>
        </v-col>
        <v-col
          cols="2"
          class="mx-1 d-flex align-center"
          v-if="this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'"
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
          v-if="this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'"
        >
          <v-checkbox
            @change="lightCarDocumentsKubunCompleted"
            v-model="lightCarDocuments.isResidentCard"
            label="住民票"
          >
          </v-checkbox>
        </v-col>
        <v-col
          cols="2"
          class="mx-1 lightCarDocuments-completedDate"
          v-if="this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'"
        >
          <!-- <v-text-field
            :class="{
              'completedDate-input': lightCarDocuments.completedDate != false,
            }"
            type="date"
            v-model="lightCarDocuments.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
        <v-col
          cols="2"
          class="mx-15 lightCarDocuments-completedDate"
          v-if="this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書'"
        >
          <!-- <v-btn @click="aaaaaaaa" density="compact" icon="mdi-printer"></v-btn> -->
        </v-col>
      </v-row>
      <v-row>
        <v-toolbar-title
          class="ml-15 d-flex align-center normalCarDocumentsGarageVerification"
          v-if="
            this.normalCarDocuments.poaOssKubun === '委任状' ||
            this.normalCarDocuments.poaOssKubun === '代行不要'
          "
        >
          　▼車庫証明
        </v-toolbar-title>
      </v-row>

      <v-row class="mt-5">
        <v-col
          cols="2"
          class="mx-14"
          v-if="
            this.normalCarDocuments.poaOssKubun === '委任状' ||
            this.normalCarDocuments.poaOssKubun === '代行不要'
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
            label="記入"
          >
          </v-checkbox>
        </v-col>

        <v-col
          cols="2"
          class="mx-1 normalCarDocumentsGarageVerification-completedDate"
          v-if="
            this.normalCarDocumentsGarageVerification
              .NCgarageVerificationKubun === '保管場所証明申請書'
          "
        >
          <!-- <v-text-field
            :class="{
              'completedDate-input':
                normalCarDocumentsGarageVerification.completedDate != false,
            }"
            type="date"
            v-model="normalCarDocumentsGarageVerification.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="
            this.normalCarDocumentsGarageVerification
              .NCgarageVerificationKubun === '保管場所証明申請書'
          "
        >
          <!-- <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn> -->
        </v-col>
      </v-row>
      <v-row>
        <v-toolbar-title
          class="ml-15 d-flex align-center lightCarDocumentsGarageVerification"
          v-if="
            this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書' ||
            this.lightCarDocuments.lightCarDocumentsKubun === '代行不要'
          "
        >
          　▼車庫証明
        </v-toolbar-title>
      </v-row>

      <v-row class="mt-5">
        <v-col
          cols="2"
          class="mx-14"
          v-if="
            this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書' ||
            this.lightCarDocuments.lightCarDocumentsKubun === '代行不要'
          "
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
            label="記入"
          >
          </v-checkbox>
        </v-col>

        <v-col
          cols="2"
          class="mx-1 lightCarDocumentsGarageVerification-completedDate"
          v-if="
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '保管場所届出書'
          "
        >
          <!-- <v-text-field
            :class="{
              'completedDate-input':
                lightCarDocumentsGarageVerification.completedDate != false,
            }"
            type="date"
            v-model="lightCarDocumentsGarageVerification.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '保管場所届出書'
          "
        >
          <!-- <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn> -->
        </v-col>
      </v-row>
      <v-row>
        <v-toolbar-title
          class="ml-15 d-flex align-center normalCarDocumentsGarageVerification"
          v-if="this.normalCarDocuments.poaOssKubun === 'OSS'"
        >
          　▼車庫証明
        </v-toolbar-title>
      </v-row>
      <v-row
        class="mt-5"
        v-if="
          this.normalCarDocuments.poaOssKubun === 'OSS' ||
          this.normalCarDocumentsGarageVerification
            .NCgarageVerificationKubun === '保管場所証明申請書' ||
          this.lightCarDocumentsGarageVerification.LCgarageVerificationKubun ===
            '保管場所届出書' ||
          this.lightCarDocumentsGarageVerification.LCgarageVerificationKubun ===
            '代行不要'
        "
      >
        <v-col cols="2" class="mx-14">
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
          <v-checkbox
            @change="selfCertificationConsentToUseKubunCompleted"
            label="記入"
            v-model="storingMethod.isFillIn"
          >
          </v-checkbox>
        </v-col>

        <v-col
          cols="2"
          class="mx-1 storingMethod-completedDate"
          v-if="
            this.storingMethod.selfCertificationConsentToUseKubun ===
              '自認書' ||
            this.storingMethod.selfCertificationConsentToUseKubun ===
              '使用承諾証'
          "
        >
          <!-- <v-text-field
            :class="{
              'completedDate-input': storingMethod.completedDate != false,
            }"
            type="date"
            v-model="storingMethod.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="
            this.storingMethod.selfCertificationConsentToUseKubun === '自認書'
          "
        >
          <!-- <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="
            this.storingMethod.selfCertificationConsentToUseKubun ===
            '使用承諾証'
          "
        >
        </v-col>
      </v-row>
      <v-row
        class="mt-5"
        v-if="
          this.normalCarDocuments.poaOssKubun === 'OSS' ||
          this.normalCarDocumentsGarageVerification
            .NCgarageVerificationKubun === '保管場所証明申請書' ||
          this.lightCarDocumentsGarageVerification.LCgarageVerificationKubun ===
            '保管場所届出書' ||
          this.lightCarDocumentsGarageVerification.LCgarageVerificationKubun ===
            '代行不要'
        "
      >
        <v-col cols="2" class="mx-14">
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
            label="記入"
            v-model="arrangementDiagram.isFillIn"
          >
          </v-checkbox>
        </v-col>
        <v-col cols="2" class="mx-1 arrangement-completedDate">
          <!-- <v-text-field
            :class="{
              'completedDate-input': arrangementDiagram.completedDate != false,
            }"
            type="date"
            v-model="arrangementDiagram.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="
            this.normalCarDocuments.poaOssKubun === 'OSS' ||
            this.normalCarDocumentsGarageVerification
              .NCgarageVerificationKubun === '保管場所証明申請書' ||
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '保管場所届出書' ||
            this.lightCarDocumentsGarageVerification
              .LCgarageVerificationKubun === '代行不要'
          "
        >
          <!-- <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn> -->
        </v-col>
      </v-row>
      <v-row>
        <v-toolbar-title
          class="ml-15 d-flex align-center other-documents"
          v-if="
            this.contracts.normalCarLightCarKubun === '普通車' ||
            this.contracts.normalCarLightCarKubun === '軽自動車'
          "
        >
          　▼その他書類
        </v-toolbar-title>
      </v-row>

      <v-row class="mt-5">
        <v-col
          cols="2"
          class="mx-14"
          v-if="
            this.normalCarDocuments.poaOssKubun === '委任状' ||
            this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書' ||
            this.normalCarDocuments.poaOssKubun === '代行不要' ||
            this.lightCarDocuments.lightCarDocumentsKubun === '代行不要'
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
          v-if="
            (this.normalCarDocuments.poaOssKubun === '委任状' ||
              this.lightCarDocuments.lightCarDocumentsKubun === '申請依頼書' ||
              this.normalCarDocuments.poaOssKubun === '代行不要' ||
              this.lightCarDocuments.lightCarDocumentsKubun === '代行不要') &&
            this.desiredNumber.isDesiredNumber === '有'
          "
        >
          <v-checkbox
            @change="isDesiredNumberCompleted"
            label="記入"
            v-model="desiredNumber.isFillIn"
          >
          </v-checkbox>
        </v-col>
        <v-col
          cols="2"
          class="mx-1 desiredNumber-completedDate"
          v-if="this.desiredNumber.isDesiredNumber === '有'"
        >
          <!-- <v-text-field
            :class="{
              'completedDate-input': desiredNumber.completedDate != false,
            }"
            type="date"
            v-model="desiredNumber.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.desiredNumber.isDesiredNumber === '有'"
        >
          <!-- <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn> -->
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col
          cols="2"
          class="mx-14"
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
            label="記入"
            v-model="etc.isFillIn"
          >
          </v-checkbox>
        </v-col>

        <v-col
          cols="2"
          class="mx-1 d-flex align-center"
          v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
        >
        </v-col>

        <!-- <v-col
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
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
        >
          <v-btn
            href="https://www.go-etc.jp/index.html"
            target="_blank"
            density="compact"
            icon="mdi-help"
          ></v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.etc.etcKubun === 'ETC' || etc.etcKubun === 'ETC-2.0'"
        >
          <!-- <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn> -->
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col
          cols="2"
          class="mx-14"
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
            label="記入"
            v-model="extendedWarranty.isFillIn"
          >
          </v-checkbox>
        </v-col>
        <v-col
          cols="2"
          class="mx-1 extendedWarranty-completedDate"
          v-if="this.extendedWarranty.isExtendedWarranty === '有'"
        >
          <!-- <v-text-field
            :class="{
              'completedDate-input': extendedWarranty.completedDate != false,
            }"
            type="date"
            v-model="extendedWarranty.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.extendedWarranty.isExtendedWarranty === '有'"
        >
          <v-btn
            href="https://www.mazda.co.jp/purchase/carlife-care/encho-hosho/5years/"
            target="_blank"
            density="compact"
            icon="mdi-help"
          ></v-btn>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col
          cols="2"
          class="mx-14"
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
            label="記入"
            v-model="maintenancePack.isFillIn"
          >
          </v-checkbox>
        </v-col>
        <v-col
          cols="2"
          class="mx-1 maintenancePack-completedDate"
          v-if="this.maintenancePack.isMaintenancePack === '有'"
        >
          <!-- <v-text-field
            :class="{
              'completedDate-input': maintenancePack.completedDate != false,
            }"
            type="date"
            v-model="maintenancePack.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.maintenancePack.isMaintenancePack === '有'"
        >
          <v-btn
            href="https://www.mazda.co.jp/purchase/carlife-care/encho-hosho/5years/"
            target="_blank"
            density="compact"
            icon="mdi-help"
          ></v-btn>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col
          cols="2"
          class="mx-14"
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
            label="記入"
            v-model="jaf.isFillIn"
          >
          </v-checkbox>
        </v-col>

        <v-col
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
          <!-- <v-text-field
            :class="{
              'completedDate-input': jaf.completedDate != false,
            }"
            type="date"
            v-model="jaf.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="
            this.jaf.isJafPaymentKubun === '有（口座振替）' ||
            this.jaf.isJafPaymentKubun === '有（クレジット）'
          "
        >
          <v-btn
            href="https://jaf.or.jp/individual"
            target="_blank"
            density="compact"
            icon="mdi-help"
          ></v-btn>
        </v-col>
      </v-row>
      <v-row
        class="mt-5"
        v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
      >
        <v-col cols="2" class="mx-15">
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
            label="記入"
            v-model="taxDeclaration.isFillIn"
          >
          </v-checkbox>
        </v-col>
        <v-col cols="2 taxDeclaration-completedDate" class="mx-1">
          <!-- <v-text-field
            :class="{
              'completedDate-input': taxDeclaration.completedDate != false,
            }"
            type="date"
            v-model="taxDeclaration.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>
      <v-row>
        <v-toolbar-title
          class="ml-15 d-flex align-center credit"
          v-if="this.contracts.paymentKubun === 'クレジット'"
        >
          　▼クレジット書類
        </v-toolbar-title>
      </v-row>

      <v-row class="mt-5" v-if="this.contracts.paymentKubun === 'クレジット'">
        <v-col cols="2" class="mx-14">
          <v-combobox
            v-model="credit.creditDocuments"
            label=""
            :items="[]"
            variant="outlined"
            readonly
          ></v-combobox>
        </v-col>

        <v-col cols="2" class="mx-1 d-flex align-center">
          <v-checkbox
            @change="CreditDocumentsCompleted"
            v-model="credit.isFillIn"
            label="記入"
          >
          </v-checkbox>
        </v-col>

        <v-col cols="2" class="mx-1 d-flex align-center">
          <v-checkbox
            @change="CreditDocumentsCompleted"
            v-model="credit.isRegisteredSeal"
            label="銀行印"
          >
          </v-checkbox>
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
          class="mx-15 d-flex align-center"
          v-if="this.contracts.paymentKubun === 'クレジット'"
        >
          <v-btn
            href="https://www.mazdacr.co.jp/lineup/lineup.html?mode=sky"
            target="_blank"
            density="compact"
            icon="mdi-help"
          ></v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.contracts.normalCarLightCarKubun === '軽自動車'"
        >
          <!-- <v-btn @click="aaa" density="compact" icon="mdi-printer"></v-btn> -->
        </v-col>
      </v-row>
      <v-row>
        <v-toolbar-title
          class="ml-15 d-flex align-center insurance"
          v-if="
            this.contracts.insuranceKubun === '当社加入' ||
            this.contracts.insuranceKubun === '他社加入'
          "
        >
          　▼保険
        </v-toolbar-title>
      </v-row>
      <v-row class="mt-5">
        <v-col
          cols="2"
          v-if="this.contracts.insuranceKubun === '当社加入'"
          class="mx-14"
        >
          <v-select
            label="保険会社"
            v-model="insurance.jocInsuranceCompany"
            :items="['', '東京海上', '三井住友', '損保ジャパン']"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col
          cols="2"
          v-if="
            this.insurance.jocInsuranceCompany === '東京海上' ||
            this.insurance.jocInsuranceCompany === '三井住友' ||
            this.insurance.jocInsuranceCompany === '損保ジャパン'
          "
          class="mx-1 d-flex align-center"
        >
          <v-checkbox
            @change="insuranceCompleted"
            label="手続き"
            v-model="insurance.joiningProcedure"
          >
          </v-checkbox>
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
          class="mx-15 d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '東京海上'"
        >
          <v-btn
            href="https://www.tokiomarine-nichido.co.jp/"
            target="_blank"
            density="compact"
            icon="mdi-help"
          ></v-btn>
        </v-col>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '三井住友'"
        >
          <v-btn
            href="https://www.ms-ins.com/lp/car-2406h/?utm_source=yahoo&utm_medium=cpc&utm_campaign=prm_202406_ys_src_cv00001_h-name&utm_content=p-paid&yclid=YSS.1001283068.EAIaIQobChMI86yM-dCViQMVZG0PAh0HgCmzEAAYASAAEgJXePD_BwE"
            target="_blank"
            density="compact"
            icon="mdi-help"
          ></v-btn>
        </v-col>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '損保ジャパン'"
        >
          <v-btn
            href="https://www.sompo-japan.co.jp/"
            target="_blank"
            density="compact"
            icon="mdi-help"
          ></v-btn>
        </v-col>
      </v-row>

      <!-- <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '東京海上'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '三井住友'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="1"
          class="mx-15 d-flex align-center"
          v-if="this.insurance.jocInsuranceCompany === '損保ジャパン'"
        >
          <v-btn @click="aaa" density="compact" icon="mdi-help"></v-btn>
        </v-col>
      </v-row> -->
      <v-row class="mt-5">
        <v-col
          cols="2"
          v-if="this.contracts.insuranceKubun === '他社加入'"
          class="mx-14"
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
          v-if="this.contracts.insuranceKubun === '他社加入'"
          class="mx-1 insurance-completedDate"
        >
          <!-- <v-text-field
            :class="{
              'completedDate-input': insurance.completedDate != false,
            }"
            type="date"
            v-model="insurance.completedDate"
            label="完了日"
          ></v-text-field> -->
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-toolbar-title class="ml-15 d-flex align-center memo">
          　▼メモ
        </v-toolbar-title>
      </v-row> -->

      <!-- <v-row class="mt-5" v-for="(memo, index) in memos" :key="index">
        <v-col>
        {{ index }}
      </v-col>
        <v-col cols="2" class="mx-14">
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
    </v-app>
    <div class="whole-bottom"></div>
  </div>
</template>

<style lang="scss">
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
}
.credit-completedDate {
  color: #ff0000;
}
.normalCarDocuments {
  max-width: 87%;
  background: #4db56a;
  color: #ffffff;
}
.normalCarDocuments-completedDate {
  color: #ff0000;
}
.lightCarDocuments {
  max-width: 87%;
  background: #4db56a;
  color: #ffffff;
}
.lightCarDocuments-completedDate {
  color: #ff0000;
}
.normalCarDocumentsGarageVerification {
  max-width: 87%;
  background: #6e6eff;
  color: #ffffff;
}
.normalCarDocumentsGarageVerification-completedDate {
  color: #ff0000;
}
.lightCarDocumentsGarageVerification {
  max-width: 87%;
  background: #6e6eff;
  color: #ffffff;
}
.lightCarDocumentsGarageVerification-completedDate {
  color: #ff0000;
}
.other-documents {
  max-width: 87%;
  background: #fc9325;
  color: #ffffff;
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
}
.insurance-completedDate {
  color: #ff0000;
}

.taxDeclaration-completedDate {
  color: #ff0000;
}

.completedDate-input {
  color: #000000;
}
.memo {
  max-width: 87%;
  background: #262626;
  color: #ffffff;
}
.whole-bottom {
  margin-bottom: 10%;
}
</style>
