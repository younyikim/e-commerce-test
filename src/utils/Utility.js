export const Utility = {
  /* 0 ~ MAX_LENGTH 까지의 문자열만 보여주고, 그 이후의 문자열은 '...'로 보여주는 메서드 */
  truncateText(text) {
    const MAX_LENGTH = 30;

    if (text.length <= MAX_LENGTH) {
      return text;
    }

    const truncatedText = text.substring(0, MAX_LENGTH) + '...';

    return truncatedText;
  },

  /* 10,000원과 같이 1000원 단위에 구분 기호를 추가하는 메서드 */
  formattedPriceToWon(price) {
    return price.toLocaleString();
  },

  /* 0.51 형식의 할인률을 51% 형식으로 변환하는 메서드 */
  formattedDiscountPercentage(percent) {
    return Math.floor(percent * 100) + '%';
  },

  /* 할인가를 계산하는 메서드 */
  calcDiscountPrice(price, percent) {
    const calcPercent = 1 - percent;
    return Math.floor(price * calcPercent);
  },
};
