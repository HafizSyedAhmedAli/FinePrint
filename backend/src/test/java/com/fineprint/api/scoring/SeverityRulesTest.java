package com.fineprint.api.scoring;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

class SeverityRulesTest {

  @Test
  void autoRenewalWithoutCancellationClauseIsHigh() {
    assertThat(SeverityRules.autoRenewal(true, false)).isEqualTo(Severity.HIGH);
  }

  @Test
  void autoRenewalWithCancellationClauseIsMedium() {
    assertThat(SeverityRules.autoRenewal(true, true)).isEqualTo(Severity.MEDIUM);
  }

  @Test
  void noAutoRenewalIsLow() {
    assertThat(SeverityRules.autoRenewal(false, false)).isEqualTo(Severity.LOW);
  }
}
