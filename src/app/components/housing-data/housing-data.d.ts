export interface HousingData {
  /** 会社ID（URLから取得する） */
  id: string;

  /** ページURL */
  url: string;

  /** ページタイトル */
  title: string;

  /** 賃料： [n]万 */
  rent: number;

  /** 間取り */
  layout: string;

  /** 間取り詳細 */
  layoutDetail: string;

  /** 専有面積： [n]m2 */
  occupiedArea: number;

  /** バルコニー面積： [n]m2 */
  balconyArea: number;

  /** 敷金： [n]万 */
  deposit: number;

  /** 礼金： [n]万 */
  gratuity: number;

  /** 敷引・償却 */
  depreciation: string;

  /** 仲介手数料 */
  brokerage: number;

  /** 保証金： [n]万 */
  guarantee: number;

  /** 保証会社 */
  guaranteeCompany: string;

  /** 住宅保険 */
  insurance: string;

  /** 所在地 */
  location: string;

  /** 駐車場 */
  parking: string;

  /** 交通 */
  traffic: string;

  /** 周辺情報 */
  surroundingInfo: string;

  /** 階数 */
  floor: string;

  /** 階建て */
  story: string;

  /** 総戸数 */
  totalUnits: number;

  /** 採光向き */
  orientation: string;

  /** 年数 */
  builtDate: Date;

  /** 建物構造 */
  structure: string;

  /** 設備 */
  facilities: string;

  /** リノベーション済み */
  hasRenovated: boolean;

  /** 現況 */
  currentStatus: string;

  /** 契約期間・定期借家 */
  contractPeriod: string;

  /** 入居方法 */
  moveInMethod: string;

  /** 即日入居可能 */
  beAvailableImmediately: boolean;

  /** 取引形態 */
  transactionType: string;

  /** 管理 */
  management: string;

  /** 条件 */
  conditions: string;

  /** 更新日 */
  updatedAt: Date;

  /** 画像集 */
  thumbnails: {
    tag: string | null;
    url: string;
  }[];

  /** その他のコスト */
  otherCosts: string;

  /** 備考 */
  remarks: string;

  /** 取り扱い会社 */
  company: {
    /** 会社ID（URLから取得する） */
    id: string;

    /** ページURL */
    url: string;

    /** 名前 */
    name: string;

    /** 住所 */
    address: string;

    /** 電話番号 */
    phoneNumber: string;

    /** 定休日 */
    holiday: string;

    /** 営業時間 */
    businessHours: string;
  };
}
