package com.fineprint.api.scoring;

public final class SeverityRules {

  private SeverityRules() {}

  public static Severity autoRenewal(boolean autoRenews, boolean hasCancellationClause) {
    if (!autoRenews) {
      return Severity.LOW;
    }
    return hasCancellationClause ? Severity.MEDIUM : Severity.HIGH;
  }
}
